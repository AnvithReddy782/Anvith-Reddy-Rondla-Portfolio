'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BlueprintShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uColorDot: { value: new THREE.Color("#1A1A1A") },
        uColorHighlight: { value: new THREE.Color("#00B4A6") },
    },
    vertexShader: `
        varying vec2 vUv;
        varying float vInteraction;
        uniform float uTime;
        uniform vec2 uMouse;

        void main() {
            vUv = uv;
            vec3 pos = position;
            
            // Map mouse to plane coordinates (plane is 200x200)
            vec2 mousePos = uMouse * 100.0;
            float dist = distance(pos.xy, mousePos);
            
            // The "Lump" effect: Organic displacement based on proximity
            // Instead of lifting (Z), we slightly offset X & Y for a repulsion feel
            // and lift slightly (Z) for the "lump" shadow-like depth
            float radius = 25.0;
            float strength = 15.0;
            float influence = exp(-(dist * dist) / (2.0 * radius * radius));
            
            // Gentle repulsion away from mouse
            vec2 dir = normalize(pos.xy - mousePos);
            pos.xy += dir * influence * 2.0; 
            
            // Subtle 3D lift for the "lump" look
            pos.z += influence * 5.0;

            vInteraction = influence;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    fragmentShader: `
        varying vec2 vUv;
        varying float vInteraction;
        uniform float uTime;
        uniform vec3 uColorDot;
        uniform vec3 uColorHighlight;

        void main() {
            vec2 uv = vUv;
            
            // High-Density Technical Dots
            float res = 120.0; // Higher density for premium look
            vec2 grid = fract(uv * res);
            
            // Sharper, smaller dots
            float dotRadius = 0.12; 
            float dot = 1.0 - smoothstep(dotRadius - 0.02, dotRadius + 0.02, length(grid - 0.5));
            
            // Interactive color shift
            vec3 color = mix(uColorDot, uColorHighlight, vInteraction * 0.8);
            
            // Subtle clean opacity
            float alpha = dot * (0.08 + vInteraction * 0.15);
            
            // Discard completely transparent pixels for performance
            if (alpha < 0.01) discard;

            gl_FragColor = vec4(color, alpha);
        }
    `
};

export function BlueprintGrid() {
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(typeof window !== 'undefined' ? window.innerWidth : 1, typeof window !== 'undefined' ? window.innerHeight : 1) },
        uColorDot: { value: new THREE.Color("#1A1A1A") },
        uColorHighlight: { value: new THREE.Color("#00B4A6") },
    }), []);

    useFrame((state) => {
        if (!materialRef.current) return;

        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

        // Target mouse position with high precision lerping
        materialRef.current.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
            materialRef.current.uniforms.uMouse.value.x,
            state.mouse.x,
            0.15
        );
        materialRef.current.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
            materialRef.current.uniforms.uMouse.value.y,
            state.mouse.y,
            0.15
        );
    });

    return (
        <mesh position={[0, 0, 0]}>
            <planeGeometry args={[200, 200, 256, 256]} />
            <shaderMaterial
                ref={materialRef}
                transparent
                fragmentShader={BlueprintShaderMaterial.fragmentShader}
                vertexShader={BlueprintShaderMaterial.vertexShader}
                uniforms={uniforms}
                depthWrite={false}
            />
        </mesh>
    );
}

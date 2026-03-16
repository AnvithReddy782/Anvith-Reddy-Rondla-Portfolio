'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BlueprintShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uColorDot: { value: new THREE.Color("#FFD7B0") }, // Very Light Orange (Saffron tint)
        uColorHighlight: { value: new THREE.Color("#FF6B00") }, // Active Saffron Orange
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
            
            // Fine-tuned Gaussian repulsion (The "Lump")
            float radius = 35.0; // Wider influence for premium smoothness
            float strength = 20.0;
            float influence = exp(-(dist * dist) / (2.0 * radius * radius));
            
            // Organic repulsion physics (lateral shift)
            vec2 dir = normalize(pos.xy - mousePos + 0.0001);
            pos.xy += dir * influence * 4.4; 
            
            // Minimal Z-lift for surface tactile depth
            pos.z += influence * 4.0;

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
            
            // Professional Density Technical Dots
            float res = 320.0; // High density for "Antigravity" look
            vec2 grid = fract(uv * res);
            
            // Ultra-Micro Dots (precise and clean)
            float dotRadius = 0.05; 
            float dot = 1.0 - smoothstep(dotRadius - 0.015, dotRadius + 0.015, length(grid - 0.5));
            
            // Interactive color shift with subtle blend
            vec3 color = mix(uColorDot, uColorHighlight, vInteraction * 0.7);
            
            // Clean technical opacity
            float alpha = dot * (0.05 + vInteraction * 0.12);
            
            if (alpha < 0.005) discard;

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
        uColorDot: { value: new THREE.Color("#FFD7B0") },
        uColorHighlight: { value: new THREE.Color("#FF6B00") },
    }), []);

    useFrame((state) => {
        if (!materialRef.current) return;

        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

        // Fluid, high-smoothness mouse tracking
        materialRef.current.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
            materialRef.current.uniforms.uMouse.value.x,
            state.mouse.x,
            0.08
        );
        materialRef.current.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
            materialRef.current.uniforms.uMouse.value.y,
            state.mouse.y,
            0.08
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

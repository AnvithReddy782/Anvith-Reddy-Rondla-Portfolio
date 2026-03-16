'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, extend, ThreeElement } from '@react-three/fiber';
import * as THREE from 'three';

// Custom shader for the architectural blueprint grid
const BlueprintShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uScroll: { value: 0 },
        uColorPrimary: { value: new THREE.Color("#00B4A6") }, // Precision Teal
        uColorSecondary: { value: new THREE.Color("#FF5C00") }, // Saffron Orange
    },
    vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uScroll;

        void main() {
            vUv = uv;
            vec3 pos = position;
            
            // Subtle parallax displacement
            pos.z += sin(pos.x * 0.2 + uTime) * 0.5;
            pos.z += cos(pos.y * 0.2 + uTime) * 0.5;
            
            // Mouse tilt effect
            pos.z += (uMouse.x * pos.x + uMouse.y * pos.y) * 0.1;

            vPosition = pos;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float uTime;
        uniform float uScroll;
        uniform vec2 uResolution;
        uniform vec3 uColorPrimary;
        uniform vec3 uColorSecondary;

        float grid(vec2 uv, float res) {
            vec2 grid = fract(uv * res);
            vec2 line = step(0.98, grid);
            return max(line.x, line.y);
        }

        void main() {
            vec2 uv = vUv;
            
            // Multi-octave grid system
            float g1 = grid(uv, 10.0); // Primary architectural lines
            float g2 = grid(uv, 40.0); // Detailed technical divisions
            float g3 = grid(uv, 2.0);  // Large structural boundaries
            
            float alpha = g1 * 0.15 + g2 * 0.05 + g3 * 0.02;
            
            // Intersection light points
            vec2 iGrid = fract(uv * 10.0 + 0.5);
            float points = 1.0 - smoothstep(0.0, 0.15, length(iGrid - 0.5));
            float flicker = sin(uTime * 2.0 + uv.x * 10.0) * 0.5 + 0.5;
            
            vec3 finalColor = mix(uColorPrimary, uColorSecondary, points * flicker * 0.5);
            float finalAlpha = alpha + (points * flicker * 0.2);

            // Architectural "Vignette" / Fade at edges
            float edgeFade = smoothstep(0.5, 0.1, abs(uv.x - 0.5)) * smoothstep(0.5, 0.1, abs(uv.y - 0.5));
            
            gl_FragColor = vec4(finalColor, finalAlpha * edgeFade);
        }
    `
};

export function BlueprintGrid() {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<any>(null);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(typeof window !== 'undefined' ? window.innerWidth : 1, typeof window !== 'undefined' ? window.innerHeight : 1) },
        uScroll: { value: 0 },
        uColorPrimary: { value: new THREE.Color("#00B4A6") },
        uColorSecondary: { value: new THREE.Color("#FF5C00") },
    }), []);

    useFrame((state) => {
        if (!materialRef.current) return;

        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

        // Internal lerping for mouse movement
        materialRef.current.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
            materialRef.current.uniforms.uMouse.value.x,
            state.mouse.x,
            0.05
        );
        materialRef.current.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
            materialRef.current.uniforms.uMouse.value.y,
            state.mouse.y,
            0.05
        );

        // Map scroll to uniform
        materialRef.current.uniforms.uScroll.value = window.scrollY;
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -5, 0]}>
            <planeGeometry args={[100, 100, 64, 64]} />
            <shaderMaterial
                ref={materialRef}
                transparent
                fragmentShader={BlueprintShaderMaterial.fragmentShader}
                vertexShader={BlueprintShaderMaterial.vertexShader}
                uniforms={uniforms}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </mesh>
    );
}

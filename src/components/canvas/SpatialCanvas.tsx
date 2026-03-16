'use client';

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { BlueprintGrid } from './BlueprintGrid';

interface SpatialCanvasProps {
    children?: React.ReactNode;
}

export default function SpatialCanvas({ children }: SpatialCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <Canvas
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
                eventSource={typeof window !== 'undefined' ? window : undefined}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 100]} fov={30} />

                <ambientLight intensity={1.0} />

                <BlueprintGrid />

                <Float speed={0} rotationIntensity={0} floatIntensity={0}>
                    {children}
                </Float>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}

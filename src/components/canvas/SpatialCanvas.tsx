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
                shadows
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
                eventSource={typeof window !== 'undefined' ? window : undefined}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={45} />

                <ambientLight intensity={0.2} />

                <BlueprintGrid />

                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                    {children}
                </Float>

                <Environment preset="night" />
            </Canvas>
        </div>
    );
}

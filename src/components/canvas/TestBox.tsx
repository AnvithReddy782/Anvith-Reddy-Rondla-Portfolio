'use client';

import React from 'react';
import * as THREE from 'three';

export function TestBox() {
    const meshRef = React.useRef<THREE.Mesh>(null);
    const [hovered, setHover] = React.useState(false);

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={hovered ? 1.2 : 1}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "#FF6B00" : "#00B4A6"} wireframe />
        </mesh>
    );
}

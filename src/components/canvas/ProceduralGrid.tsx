'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Custom shader material definition
const GridShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uScrollVelocity: { value: 0 },
    uResolution: { value: new THREE.Vector2(1000, 1000) },
  },
  vertexShader: `
    uniform vec2 uMouse;
    uniform float uScrollVelocity;
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Apply 3D tilt based on mouse position
      // Mouse ranges from -1 to 1. Tilt X (rotation around Y) and Tilt Y (rotation around X)
      float tiltX = uMouse.x * 0.15;
      float tiltY = uMouse.y * 0.15;
      
      // Translate slightly based on tilt
      pos.z += sin(pos.x * 3.14159) * tiltX * 0.5;
      pos.z += sin(pos.y * 3.14159) * tiltY * 0.5;
      
      // Bend grid based on scroll velocity (compression wave in the center)
      pos.z += cos(length(pos.xy) * 2.0) * uScrollVelocity * 0.15;
      
      vPosition = pos;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uScrollVelocity;
    uniform vec2 uResolution;
    varying vec2 vUv;
    varying vec3 vPosition;

    // Palette Colors
    const vec3 cBg = vec3(0.039, 0.039, 0.039); // #0A0A0A (converted to normalized 0-1)
    const vec3 cSaffron = vec3(1.0, 0.42, 0.0); // #FF6B00
    const vec3 cTeal = vec3(0.0, 0.706, 0.651);  // #00B4A6
    const vec3 cViolet = vec3(0.486, 0.435, 0.969); // #7C6FF7
    const vec3 cGridLine = vec3(0.12, 0.11, 0.14); // Very subtle dark line

    // Function to draw a line grid
    float grid(vec2 uv, float spacing) {
      vec2 grid = abs(fract(uv / spacing - 0.5) - 0.5) / fwidth(uv / spacing);
      float line = min(grid.x, grid.y);
      return 1.0 - min(line, 1.0);
    }

    void main() {
      // Normalize UV to center-based coordinates
      vec2 st = (vUv - 0.5) * 2.0;
      st.x *= uResolution.x / uResolution.y;

      // Scale and spacing for grid
      float baseSpacing = 0.15;
      
      // Slow breathing effect via time
      float breathing = sin(uTime * 0.5) * 0.01;
      float spacing = baseSpacing + breathing;
      
      // Compute main grid
      float g1 = grid(st, spacing);
      
      // Compute subgrid (finer lines)
      float g2 = grid(st, spacing / 3.0) * 0.3;
      
      // Combine grids
      float finalGrid = max(g1, g2);

      // Distance to mouse pointer in 3D coordinate space
      vec2 mousePos = uMouse;
      mousePos.x *= uResolution.x / uResolution.y;
      float distToMouse = length(st - mousePos);

      // Light glow effect at cursor
      float cursorGlow = smoothstep(0.8, 0.0, distToMouse) * 0.35;
      
      // Interaction color highlights
      vec3 accentColor = mix(cViolet, cTeal, step(0.0, uScrollVelocity));
      accentColor = mix(accentColor, cSaffron, smoothstep(0.2, 0.0, distToMouse));

      // Intersection dots
      vec2 gridCoords = fract(st / spacing - 0.5) - 0.5;
      float dotSize = 0.004 + abs(uScrollVelocity) * 0.002;
      float dots = smoothstep(dotSize, 0.0, length(gridCoords) * spacing);
      
      // Compose final image
      vec3 col = cBg;
      
      // Draw grid lines (subtle blend)
      col = mix(col, cGridLine, finalGrid * 0.6);
      
      // Apply cursor glow
      col += accentColor * cursorGlow * (finalGrid + 0.1);
      
      // Draw glowing intersection dots
      col = mix(col, accentColor, dots * 0.8);
      
      // Fade grid at edges to blend into vignette
      float edgeFade = smoothstep(1.8, 0.5, length(st));
      col = mix(cBg, col, edgeFade);

      gl_FragColor = vec4(col, 1.0);
    }
  `
};

export default function ProceduralGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  const uniforms = useMemo(() => {
    return THREE.UniformsUtils.clone(GridShaderMaterial.uniforms);
  }, []);

  // Update mouse state, time, and scroll velocity on every frame
  useFrame((state) => {
    if (!materialRef.current) return;

    // Time increment
    materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();

    // Mouse coordinates (R3F provides pointer ranging from -1 to 1)
    const targetMouseX = state.pointer.x;
    const targetMouseY = state.pointer.y;
    
    // Smooth lerp for mouse coordinates to avoid jerky movements
    const currentMouseX = materialRef.current.uniforms.uMouse.value.x;
    const currentMouseY = materialRef.current.uniforms.uMouse.value.y;
    
    materialRef.current.uniforms.uMouse.value.set(
      THREE.MathUtils.lerp(currentMouseX, targetMouseX, 0.08),
      THREE.MathUtils.lerp(currentMouseY, targetMouseY, 0.08)
    );

    // Track scroll velocity via a global or window hook if available
    let velocity = 0;
    if (typeof window !== 'undefined') {
      const scrollV = (window as any).__scrollVelocity || 0;
      velocity = scrollV;
    }
    
    // Smooth lerp for scroll velocity decay
    const currentVelocity = materialRef.current.uniforms.uScrollVelocity.value;
    materialRef.current.uniforms.uScrollVelocity.value = THREE.MathUtils.lerp(
      currentVelocity,
      velocity * 0.02, // scaled velocity
      0.1
    );

    // Update resolution
    materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={GridShaderMaterial.vertexShader}
        fragmentShader={GridShaderMaterial.fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        transparent={true}
      />
    </mesh>
  );
}

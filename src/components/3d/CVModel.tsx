import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const CVPage: React.FC<{ rotation: number; template: string }> = ({ rotation, template }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Carreguem la textura del CV
  const texture = useTexture(`/images/${template.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.png`);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      castShadow 
      receiveShadow
    >
      <planeGeometry args={[2, 2.8]} />
      <meshStandardMaterial 
        map={texture}
        toneMapped={false}
        metalness={0}
        roughness={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const CVModel: React.FC<{ activeTemplate: string }> = ({ activeTemplate }) => {
  const [rotation, setRotation] = useState(0);

  return (
    <div className="cv-model-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: '#ffffff' }}
      >
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={1} />
        <CVPage rotation={rotation} template={activeTemplate} />
        <OrbitControls 
          enableZoom={false}
          onChange={(e) => {
            if (e?.target?.object?.rotation) {
              setRotation(e.target.object.rotation.y);
            }
          }}
        />
      </Canvas>
    </div>
  );
};

export default CVModel; 
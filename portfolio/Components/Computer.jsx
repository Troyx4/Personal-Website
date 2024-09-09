import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Computer(props) {
  const { nodes, materials } = useGLTF('src/assets/models/scene.gltf');
  
  // Create a reference to the group containing the model
  const groupRef = useRef();

  // Use the useFrame hook to rotate the model on every frame
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Adjust this value to change the speed of rotation
    }
  });

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh
        geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry}
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <ambientLight />
    </group>
  );
}

useGLTF.preload('src/assets/models/scene.gltf');

import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const SnowGlobe = () => {
  const model = useGLTF("/models/snow-globe.glb");

  return (
    <RigidBody
      colliders="trimesh"
      position={[0, -1.0, 0]}
      type="fixed"
      restitution={0}
      scale={1}
    >
      <mesh
        geometry={(model.nodes["outer-glass"] as THREE.Mesh).geometry}
        position={model.nodes["outer-glass"].position}
        rotation={model.nodes["outer-glass"].rotation}
        scale={model.nodes["outer-glass"].scale}
      >
        <meshPhysicalMaterial
          color={new THREE.Color(1, 1, 1)}
          opacity={0.1}
          transparent={true}
          roughness={0.5}
          metalness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      <mesh
        geometry={(model.nodes["wood-base"] as THREE.Mesh).geometry}
        position={model.nodes["wood-base"].position}
        rotation={model.nodes["wood-base"].rotation}
        scale={model.nodes["wood-base"].scale}
      >
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </RigidBody>
  );
};
export default SnowGlobe;

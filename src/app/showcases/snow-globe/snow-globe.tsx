import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const SnowGlobe = () => {
  const model = useGLTF("/models/snow-globe.glb");

  return (
    <>
      <RigidBody
        colliders="trimesh"
        type="fixed"
        restitution={0}
        friction={0.8}
        canSleep={false}
      >
        <mesh
          geometry={(model.nodes["glass-ball"] as THREE.Mesh).geometry}
          position={model.nodes["glass-ball"].position}
          rotation={model.nodes["glass-ball"].rotation}
          scale={model.nodes["glass-ball"].scale}
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
      </RigidBody>

      <RigidBody type="fixed" restitution={0} friction={1}>
        <mesh
          geometry={(model.nodes["base"] as THREE.Mesh).geometry}
          material={(model.nodes["base"] as THREE.Mesh).material}
          position={model.nodes["base"].position}
          rotation={model.nodes["base"].rotation}
          scale={model.nodes["base"].scale}
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          onPointerUp={(e) => e.stopPropagation()}
        />
      </RigidBody>

      <mesh
        geometry={(model.nodes["base-snow"] as THREE.Mesh).geometry}
        material={(model.nodes["base-snow"] as THREE.Mesh).material}
        position={model.nodes["base-snow"].position}
        rotation={model.nodes["base-snow"].rotation}
        scale={model.nodes["base-snow"].scale}
      />

      <mesh
        geometry={(model.nodes["tree-trunk"] as THREE.Mesh).geometry}
        material={(model.nodes["tree-trunk"] as THREE.Mesh).material}
        position={model.nodes["tree-trunk"].position}
        rotation={model.nodes["tree-trunk"].rotation}
        scale={model.nodes["tree-trunk"].scale}
      />

      <RigidBody type="fixed" colliders="hull" restitution={0} friction={1}>
        <mesh
          geometry={(model.nodes["tree-leaf"] as THREE.Mesh).geometry}
          material={(model.nodes["tree-leaf"] as THREE.Mesh).material}
          position={model.nodes["tree-leaf"].position}
          rotation={model.nodes["tree-leaf"].rotation}
          scale={model.nodes["tree-leaf"].scale}
        />
      </RigidBody>
    </>
  );
};
export default SnowGlobe;

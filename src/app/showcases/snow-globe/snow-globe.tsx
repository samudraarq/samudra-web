import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
  nodes: {
    base: THREE.Mesh;
    ["base-snow"]: THREE.Mesh;
    ["glass-ball"]: THREE.Mesh;
    ["tree-trunk"]: THREE.Mesh;
    ["tree-leaves"]: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshStandardMaterial;
    snow: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    ["tree-trunk"]: THREE.MeshStandardMaterial;
    ["tree-leaves"]: THREE.MeshStandardMaterial;
  };
};

const SnowGlobe = (props: any) => {
  const { nodes, materials } = useGLTF(
    "/models/snow-globe.glb",
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <RigidBody
        colliders="trimesh"
        type="fixed"
        restitution={0}
        friction={0.8}
        canSleep={false}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["glass-ball"].geometry}
          material={materials.glass}
          position={[0, 4.277, 0]}
        />
      </RigidBody>

      <RigidBody type="fixed" restitution={0} friction={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base.geometry}
          material={materials.base}
          position={[0, 0.005, 0]}
          rotation={[0, Math.PI / 4, 0]}
        />
      </RigidBody>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes["base-snow"].geometry}
        material={materials.snow}
        position={[0, 2.447, 0]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-trunk"].geometry}
        material={materials["tree-trunk"]}
        position={[0, 3.112, 0]}
      />

      <RigidBody type="fixed" colliders="hull" restitution={0} friction={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tree-leaves"].geometry}
          material={materials["tree-leaves"]}
          position={[0, 3.602, 0]}
        />
      </RigidBody>
    </group>
  );
};
export default SnowGlobe;

import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
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
  const {
    backside,
    clearcoat,
    clearcoatRoughness,
    thickness,
    chromaticAberration,
    anisotropicBlur,
    envMapIntensity,
  } = useControls("Snow Globe Material", {
    backside: true,
    clearcoat: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    clearcoatRoughness: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    thickness: {
      value: 0.05,
      min: 0,
      max: 0.2,
      step: 0.01,
    },
    chromaticAberration: {
      value: 0.05,
      min: 0,
      max: 0.2,
      step: 0.01,
    },
    anisotropicBlur: {
      value: 1,
      min: 0,
      max: 5,
      step: 0.01,
    },
    envMapIntensity: {
      value: 1.5,
      min: 0,
      max: 5,
      step: 0.01,
    },
  });

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
        <mesh castShadow geometry={nodes["glass-ball"].geometry}>
          <MeshTransmissionMaterial
            backside={backside}
            backsideThickness={thickness}
            thickness={thickness}
            chromaticAberration={chromaticAberration}
            anisotropicBlur={anisotropicBlur}
            clearcoat={clearcoat}
            clearcoatRoughness={clearcoatRoughness}
            envMapIntensity={envMapIntensity}
          />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" restitution={0} friction={1}>
        <mesh
          castShadow
          geometry={nodes.base.geometry}
          material={materials.base}
        />
      </RigidBody>

      <mesh
        castShadow
        geometry={nodes["base-snow"].geometry}
        material={materials.snow}
      />

      <mesh
        castShadow
        geometry={nodes["tree-trunk"].geometry}
        material={materials["tree-trunk"]}
      />

      <RigidBody type="fixed" colliders="hull" restitution={0} friction={1}>
        <mesh
          castShadow
          geometry={nodes["tree-leaves"].geometry}
          material={materials["tree-leaves"]}
        />
      </RigidBody>
    </group>
  );
};
export default SnowGlobe;

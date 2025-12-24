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
    Cube003: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube006_1: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube007_1: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube008_1: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshStandardMaterial;
    snow: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    ["tree-trunk"]: THREE.MeshStandardMaterial;
    ["tree-leaves"]: THREE.MeshStandardMaterial;
    ["gift-green"]: THREE.MeshStandardMaterial;
    ["gift-ribbon"]: THREE.MeshStandardMaterial;
    ["gift-blue"]: THREE.MeshStandardMaterial;
    ["gift-purple"]: THREE.MeshStandardMaterial;
    ["gift-lightblue"]: THREE.MeshStandardMaterial;
    ["gift-yellow"]: THREE.MeshStandardMaterial;
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
      >
        <mesh geometry={nodes["glass-ball"].geometry}>
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
        <mesh geometry={nodes.base.geometry} material={materials.base} />
      </RigidBody>

      <mesh geometry={nodes["base-snow"].geometry} material={materials.snow} />

      <mesh
        geometry={nodes["tree-trunk"].geometry}
        material={materials["tree-trunk"]}
      />

      <RigidBody type="fixed" colliders="hull" restitution={0} friction={1}>
        <mesh
          geometry={nodes["tree-leaves"].geometry}
          material={materials["tree-leaves"]}
        />
      </RigidBody>

      <RigidBody type="fixed" restitution={0} friction={1}>
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["gift-green"]}
        />
      </RigidBody>
      <mesh
        geometry={nodes.Cube003_1.geometry}
        material={materials["gift-ribbon"]}
      />

      <RigidBody type="fixed" restitution={0} friction={1}>
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials["gift-blue"]}
        />
      </RigidBody>
      <mesh
        geometry={nodes.Cube005_1.geometry}
        material={materials["gift-ribbon"]}
      />

      <RigidBody type="fixed" restitution={0} friction={1}>
        <mesh
          geometry={nodes.Cube006.geometry}
          material={materials["gift-purple"]}
        />
      </RigidBody>
      <mesh
        geometry={nodes.Cube006_1.geometry}
        material={materials["gift-ribbon"]}
      />

      <RigidBody type="fixed" restitution={0} friction={1}>
        <mesh
          geometry={nodes.Cube007.geometry}
          material={materials["gift-lightblue"]}
        />
      </RigidBody>
      <mesh
        geometry={nodes.Cube007_1.geometry}
        material={materials["gift-ribbon"]}
      />

      <RigidBody type="fixed" restitution={0} friction={1}>
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials["gift-yellow"]}
        />
      </RigidBody>
      <mesh
        geometry={nodes.Cube008_1.geometry}
        material={materials["gift-ribbon"]}
      />
    </group>
  );
};
export default SnowGlobe;

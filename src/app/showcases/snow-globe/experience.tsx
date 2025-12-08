import { OrbitControls, useGLTF } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import * as THREE from "three";

const Experience = () => {
  const model = useGLTF("/models/snow-globe.glb");

  useEffect(() => {
    // Traverse semua children dalam scene dan apply material baru
    model.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(1, 1, 1),
          opacity: 0.1,
          transparent: true,
          roughness: 0.5,
          metalness: 0.5,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
        });
      }
    });
  }, [model]);

  return (
    <>
      <color attach="background" args={["#87ceeb"]} />

      <OrbitControls />

      <Physics debug={false}>
        <RigidBody
          colliders="cuboid"
          position={[0, 0, 0]}
          restitution={0.7}
          scale={0.2}
        >
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody
          colliders="trimesh"
          position={[0, -1.0, 0]}
          type="fixed"
          restitution={0.7}
          scale={0.5}
        >
          <primitive object={model.scene} />
        </RigidBody>
      </Physics>
    </>
  );
};
export default Experience;

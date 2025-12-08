import { OrbitControls, useGLTF } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import { useControls } from "leva";
import * as THREE from "three";

const Experience = () => {
  const { debug } = useControls("Snow Globe", {
    debug: true,
  });
  const model = useGLTF("/models/snow-globe.glb");

  return (
    <>
      <color attach="background" args={["#87ceeb"]} />

      <OrbitControls />

      <ambientLight intensity={3} />
      <directionalLight position={[5, 5, 5]} intensity={7} />

      <Suspense fallback={<div>Loading assets...</div>}>
        <Physics debug={debug}>
          <RigidBody
            colliders="cuboid"
            position={[0, 0, 0]}
            restitution={0.7}
            scale={0.2}
          >
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="orange" />
            </mesh>
          </RigidBody>

          <RigidBody
            colliders="trimesh"
            position={[0, -1.0, 0]}
            type="fixed"
            restitution={0.7}
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
          </RigidBody>
        </Physics>
      </Suspense>
    </>
  );
};
export default Experience;

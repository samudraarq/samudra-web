import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import { useControls } from "leva";
import SnowGlobe from "./snow-globe";

const Experience = () => {
  const { debug } = useControls("Snow Globe", {
    debug: true,
  });

  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <Environment preset="sunset" />

      <OrbitControls />

      <Suspense fallback={null}>
        <Physics debug={debug}>
          <Center>
            <RigidBody colliders="ball" restitution={0} scale={0.2}>
              <mesh>
                <sphereGeometry />
                <meshBasicMaterial color="white" />
              </mesh>
            </RigidBody>

            <SnowGlobe />
          </Center>
        </Physics>
      </Suspense>
    </>
  );
};
export default Experience;

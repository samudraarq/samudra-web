import { OrbitControls } from "@react-three/drei";
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
      <color attach="background" args={["#87ceeb"]} />

      <OrbitControls />

      <ambientLight intensity={3} />
      <directionalLight position={[5, 5, 5]} intensity={7} />

      <Suspense fallback={<div>Loading assets...</div>}>
        <Physics debug={debug}>
          <RigidBody
            colliders="ball"
            position={[0, 0, 0]}
            restitution={0}
            scale={0.2}
          >
            <mesh>
              <sphereGeometry />
              <meshBasicMaterial color="white" />
            </mesh>
          </RigidBody>

          <SnowGlobe />
        </Physics>
      </Suspense>
    </>
  );
};
export default Experience;

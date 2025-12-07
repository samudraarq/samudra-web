import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

const Experience = () => {
  return (
    <>
      <color attach="background" args={["#87ceeb"]} />

      <OrbitControls />

      <Physics debug>
        <RigidBody>
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="mediumpurple" />
          </mesh>
        </RigidBody>

        {/* Floor */}
        <RigidBody type="fixed">
          <mesh rotation-x={-Math.PI * 0.5} position={[0, -1, 0]}>
            <boxGeometry args={[10, 10, 0.2]} />
            <meshBasicMaterial color="greenyellow" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};
export default Experience;

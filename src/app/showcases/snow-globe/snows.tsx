import {
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  BallCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { button, useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";

const Snows = () => {
  useControls("Snowflakes", {
    spin: button(() => {
      spinSnows();
    }),
  });

  const snowsRigidBodies = useRef<RapierRigidBody[]>(null);

  const snowCount = 1500;
  const instances: InstancedRigidBodyProps[] = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    for (let i = 0; i < snowCount; i++) {
      instances.push({
        key: "instance_" + i,
        position: [
          (Math.random() - 0.5) * 3.2,
          1 + Math.random() * 1.5,
          (Math.random() - 0.5) * 3.2,
        ],
        scale: 0.08 + Math.random() * 0.02,
      });
    }

    return instances;
  }, []);

  const spinSnows = () => {
    if (!snowsRigidBodies.current) return;

    snowsRigidBodies.current.forEach((snow) => {
      // only apply impulse when position y is less than 0
      if (snow.translation().y < 0) {
        const currentVel = snow.linvel();
        const targetUpwardVel = 0.002;

        // Only apply impulse if current upward velocity is less than target
        if (currentVel.y < targetUpwardVel) {
          const impulse = {
            x: 0,
            y: targetUpwardVel - Math.max(currentVel.y, 0),
            z: 0,
          };
          snow.applyImpulse(impulse, true);
        }
      }
    });
  };

  return (
    <>
      <InstancedRigidBodies
        ref={snowsRigidBodies}
        instances={instances}
        colliders={false}
        colliderNodes={[<BallCollider args={[0.7]} />]}
        restitution={0}
        friction={1}
        canSleep={false}
      >
        <instancedMesh
          args={[undefined, undefined, snowCount]}
          count={snowCount}
        >
          <sphereGeometry />
          <meshStandardMaterial color="white" />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
};
export default Snows;

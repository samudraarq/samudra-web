import {
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  BallCollider,
} from "@react-three/rapier";
import { useMemo } from "react";

const Snows = () => {
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

  return (
    <>
      <InstancedRigidBodies
        instances={instances}
        colliders={false}
        colliderNodes={[<BallCollider args={[0.7]} />]}
        restitution={0}
        friction={1}
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

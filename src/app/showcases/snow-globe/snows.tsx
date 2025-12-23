import { ThreeEvent } from "@react-three/fiber";
import {
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  BallCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { button, useControls } from "leva";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const Snows = () => {
  const snowsRigidBodies = useRef<RapierRigidBody[]>(null);
  const buttonRef = useRef<THREE.Mesh>(null);

  useControls("Snowflakes", {
    spin: button(() => {
      spinSnows();
    }),
  });

  const snowCount = 500;
  const instances: InstancedRigidBodyProps[] = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    // only calculate instances after mounted to avoid SSR issues
    for (let i = 0; i < snowCount; i++) {
      instances.push({
        key: "instance_" + i,
        position: [
          Math.sin(i) * 4 * (Math.random() - 0.5),
          0.5 + Math.random() * 2,
          Math.cos(i) * 4 * (Math.random() - 0.5),
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
        const targetUpwardVel = 0.001 * (0.5 + Math.random() * 0.5);

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

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    // move button down slightly on click
    if (buttonRef.current) {
      buttonRef.current.position.z -= 0.02;
    }
    // Spin snows on button click
    spinSnows();
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    // move button back to original position on release
    if (buttonRef.current) {
      buttonRef.current.position.z += 0.02;
    }
  };

  return (
    <>
      <InstancedRigidBodies
        ref={snowsRigidBodies}
        instances={instances}
        colliders={false}
        colliderNodes={[<BallCollider args={[0.5]} />]}
        restitution={0}
        friction={1}
        canSleep={false}
        ccd={false}
      >
        <instancedMesh
          args={[undefined, undefined, snowCount]}
          count={snowCount}
        >
          <icosahedronGeometry args={[0.4, 1]} />
          <meshStandardMaterial color="white" />
        </instancedMesh>
      </InstancedRigidBodies>

      {/* Spin button */}
      <mesh
        position={[0, -2.5, 2]}
        ref={buttonRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        scale={0.5}
        rotation-x={-0.06}
      >
        <boxGeometry />
        <meshStandardMaterial color="#60BCDB" />
      </mesh>
    </>
  );
};
export default Snows;

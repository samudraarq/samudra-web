import { ThreeEvent, useFrame } from "@react-three/fiber";
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

  const snowCount = 300;
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
        // wake up the snow if sleeping
        snow.wakeUp();

        // get current upward velocity
        const currentVel = snow.linvel();
        const targetUpwardVel = 0.002 * (0.5 + Math.random() * 0.5);

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

  useFrame(() => {
    if (!snowsRigidBodies.current) return;

    snowsRigidBodies.current.forEach((snow) => {
      // for each snow, if position y > 5, reset to bottom
      const pos = snow.translation();
      if (pos.y > 3.5) {
        snow.setTranslation(
          {
            x: (Math.random() - 0.5) * 2 + 1,
            y: -2 + Math.random() * 1,
            z: (Math.random() - 0.5) * 2,
          },
          true,
        );
        snow.setLinvel({ x: 0, y: 0, z: 0 }, true);
      }

      // if position y < -1.25, sleep the snow if not already sleeping and don't have velocity
      if (pos.y < -1.25) {
        if (!snow.isSleeping() && snow.linvel().y <= 0.01) {
          snow.sleep();
        }
      }
    });
  });

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
        colliderNodes={[<BallCollider args={[0.6]} />]}
        restitution={0}
        friction={1}
        canSleep={false}
        ccd={false}
      >
        <instancedMesh
          args={[undefined, undefined, snowCount]}
          count={snowCount}
        >
          <icosahedronGeometry args={[0.6, 1]} />
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
        <meshStandardMaterial color="#996346" />
      </mesh>
    </>
  );
};
export default Snows;

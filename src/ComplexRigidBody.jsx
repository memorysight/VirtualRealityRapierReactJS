import { Canvas } from "@react-three/fiber";
import { Torus, Box, Sphere } from "@react-three/drei";
import { Suspense } from "react";
import {
  Physics,
  RigidBody,
  CuboidCollider,
  BallCollider,
  MeshCollider,
} from "@react-three/rapier";

function ComplexRigidBody() {
  return (
    <Physics debug>
    <RigidBody position={[0, 10, 0]} colliders="ball">
      <MeshCollider position={[0, -2, 0]} args={[20, 0.5, 20]} type="trimesh"></MeshCollider>

      <MeshCollider type="hull" position={[0, -2, 0]} args={[20, 0.5, 20]}></MeshCollider>

      <Sphere />

      <BallCollider args={[0.5]} />
      <BallCollider args={[0.5]} position={[1, 0, 0]} />
    </RigidBody>
    </Physics>
  );
}

export default ComplexRigidBody;

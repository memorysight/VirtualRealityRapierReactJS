import { Canvas } from "@react-three/fiber";
import { Torus, Box, Sphere } from "@react-three/drei";
import { Suspense } from "react";
import {
  Physics,
  RigidBody,
  CuboidCollider,
  BallCollider,
  MeshCollider
} from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";

const Scene = () => (
  <Physics debug>

    {/* ///box */}
    <RigidBody>
      <Box />
    </RigidBody>



    {/* ///Sphere with Box */}
    <RigidBody position={[0, 10, 0]}>
      <Sphere />
    </RigidBody>
    <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
 
{/* 
     ////Complex Spheres with Box */}
    <RigidBody position={[0, 10, 0]}>
      <Sphere />
      <BallCollider args={[0.5]} />
      <BallCollider args={[0.5]} position={[1, 0, 0]} />
    </RigidBody> 




  </Physics>
);

export default Scene;

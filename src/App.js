import { Canvas } from '@react-three/fiber';
import { Torus, Box, Sphere } from "@react-three/drei";
import { Suspense } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import Scene from './Scene';
import ComplexRigidBody from './ComplexRigidBody';

const App =  ()=> {
  return (
    <Canvas>
      <Suspense>
        <Physics debug>
        {/* <Physics gravity={[0, 1, 0]} interpolation={false} colliders={false}>
       */}
        <OrbitControls />
          <RigidBody colliders={"hull"} restitution={2}>
            <Torus />
           
          </RigidBody>
          
          <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
        </Physics>
       <Scene />
       <ComplexRigidBody />
      </Suspense>
    </Canvas>
  );
};

export default App;

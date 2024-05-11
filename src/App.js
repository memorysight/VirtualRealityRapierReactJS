import { Canvas } from '@react-three/fiber';
import { Torus } from "@react-three/drei";
import { Suspense } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";

const App =  ()=> {
  return (
    <Canvas>
      <Suspense>
        <Physics debug>
        <OrbitControls />
          <RigidBody colliders={"hull"} restitution={2}>
            <Torus />
          </RigidBody>

          <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
        </Physics>
        {/* <Scene /> */}
      </Suspense>
    </Canvas>
  );
};

export default App;

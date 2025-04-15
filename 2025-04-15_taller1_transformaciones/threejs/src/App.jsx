import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Matrix4 } from "three";

import { useRef } from "react";

function Boxes() {

  const boxRef = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  
  useFrame(({clock}) => {
    // time constant adjusted so sin(time) frecuency is 1/4 
    const time = clock.getElapsedTime() * Math.PI / 2;


    boxRef.current.matrixAutoUpdate = false;
    boxRef2.current.matrixAutoUpdate = false;
    boxRef3.current.matrixAutoUpdate = false;

    const world = new Matrix4().makeTranslation(0,0,-1)
      .multiply(new Matrix4().makeRotationX(-Math.PI/4))
      .multiply(new Matrix4().makeRotationZ(-Math.PI/4));
  
    let transform = new Matrix4().makeTranslation(3*Math.cos(time),3*Math.sin(time),0)
      .multiply(new Matrix4().makeRotationY(3*time+Math.PI))

    boxRef.current.matrix.multiplyMatrices(world, transform);

    transform
      .multiply(new Matrix4().makeTranslation(1.5,0,0))
      .multiply(new Matrix4().makeScale(0.5,0.5,0.5))
    boxRef2.current.matrix.multiplyMatrices(world, transform);

    transform = new Matrix4().makeScale(
      Math.max(6*Math.sin(2*time-Math.PI*0.1) + 1, 1),
      Math.max(6*-Math.sin(2*time-Math.PI*0.1) + 1, 1),
      1);


    boxRef3.current.matrix.multiplyMatrices(world, transform);
  });

  return(<>
    <mesh ref={boxRef}>
      <boxGeometry/>
      <meshStandardMaterial color="red"/>
    </mesh>
    <mesh ref={boxRef2}>
      <boxGeometry/>
      <meshStandardMaterial color="blue"/>
    </mesh>
    <mesh ref={boxRef3}>
      <boxGeometry/>
      <meshStandardMaterial color="green"/>
    </mesh>
  </>
  );
}

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.4}/>
        <directionalLight position={[0, 0.5, 1]} intensity={1}/>
        <directionalLight position={[0, 1, 0]} intensity={1}/>
        <Boxes/>
        <OrbitControls makeDefault/>
      </Canvas>
    </div>
  )
}

export default App

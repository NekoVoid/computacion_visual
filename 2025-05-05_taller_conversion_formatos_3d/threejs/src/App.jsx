import * as THREE from "three";
import { Canvas, useLoader} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three-stdlib";
import { STLLoader } from "three-stdlib";
import { GLTFLoader } from "three-stdlib";
import { Suspense, useEffect, useRef, useState } from "react";

function Mesh(props) {
  

  let [obj, setObj] = useState(() => useLoader(OBJLoader, props.url));
  return (
    <>
      <primitive object={obj}/>
    </>
  );
};

export default function App() {

  return (
    <div id="root" style={{ width: "100vw", height: "100vh" }}>
      <div id="controls"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
        }}
      >
      </div>
      <div id="canvas-container" style={
        {
          display: "grid",
          width: "100%",
          height: "100%",

        }}
      >

        <Canvas>  
          <ambientLight intensity={0.4}/>
          <directionalLight position={[0, 0.5, 1]} intensity={1}/>
          <directionalLight position={[0, 1, 0]} intensity={1}/>
          <Mesh url="bow.obj"/>
          <OrbitControls makeDefault/>
        </Canvas>
      </div>
    </div>
  );
}

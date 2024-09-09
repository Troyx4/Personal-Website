import React from "react";
import { Weather } from "../Components/Weather";
import { Name } from "../Components/Name";
import { Computer } from "../Components/Computer";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";



 function App(){
  return(<>
   <div className="Parent-Front-Page"> 
    <Weather></Weather> 
    <div className="Name-Model-Div">
    <Name></Name>
    <Suspense fallback={<div className="Fall-Back">Loading...</div>}>
    <Canvas >
      
      <Stage>
        <OrbitControls></OrbitControls>
        <Computer></Computer>
      </Stage>
    </Canvas>
    </Suspense>
    </div>
  </div>
  <div className="Student-Eats-Div">


  </div>
   
    </>
  )
 }


 export default App
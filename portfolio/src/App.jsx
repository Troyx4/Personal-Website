import React from "react";
import { Weather } from "../Components/Weather";
import { Name } from "../Components/Name";
import { Computer } from "../Components/Computer";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";



 function App(){
  return(<>
   <div className="Parent-Front-Page"> 
    <Weather></Weather> 
    <div className="Name-Model-Div">
    <Name></Name>
    <Canvas>
      <Stage>
        <OrbitControls></OrbitControls>
        <Computer></Computer>
      </Stage>

    </Canvas>
    </div>
    
    
    

  </div>
   
    </>
  )
 }


 export default App
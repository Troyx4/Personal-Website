import React from "react";
import { Weather } from "../Components/Weather";
import { Name } from "../Components/Name";
import { Computer } from "../Components/Computer";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Center } from "@react-three/drei";
import { HomepageButtons } from "../Components/HomepageButtons";
 function App(){
  return(<>
   <div className="Parent-Front-Page"> 
    <Weather></Weather> 
    
    <div className="Name-Model-Div">
    <Name></Name>
    <Suspense fallback={<div className="Fall-Back">Loading...</div>}>
  <Canvas style={{ overflow: "hidden" , cursor: "pointer"}}>
    <PerspectiveCamera
      makeDefault
      position={[0, 1, 100000]} // Move the camera back by setting Z position (increase this number to zoom out)
      fov={70} // Adjust field of view (lower values will zoom in, higher values will zoom out)
    />
    <OrbitControls />
    <Stage>
      <Center top>
      <Computer />
      </Center>
    </Stage>
  </Canvas>
</Suspense>

    </div>
    <HomepageButtons/>
      
    <div className="Credits"><p className="temp"> author:	Brandon Westlake (https://sketchfab.com/dr.badass2142)</p></div>
  </div>
  

  <div>
  
  </div>
 

   
    </>
  )
 }


 export default App
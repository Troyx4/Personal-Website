import { Weather } from "./Weather";
import React from "react";
import { StudentEatsProjects } from "./StudentEatsProject";
import { Link } from "react-router-dom";
export function Projects(){
  return(
   <div className="Parent-Front-Page"> 
    <Weather></Weather>
    <div className="Project-Container">
    <StudentEatsProjects></StudentEatsProjects>
    
    <div className="Portfolio-div"> <Link to="/" className="Portfolio-Text"><p className="Portfolio-Text">Portfolio</p> </Link></div>
    </div>
    
  
    </div>
  
  
  )
}
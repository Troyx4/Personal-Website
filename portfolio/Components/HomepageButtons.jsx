import { Link } from 'react-router-dom';
import React from "react"
export function HomepageButtons(){
  return(
    <div className="Introduction">
    <Link to="/projects/1">
    <button className="Projects-Button">Projects</button>     
    </Link>
    <a href="Resume/_Resume.pdf"><button className="Projects-Button">Resume</button></a>
    <a href='https://linktr.ee/TroyMuyobo'><button className="Projects-Button">Contact</button> </a>

    </div>
  )
}
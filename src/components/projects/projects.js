import React from 'react';
import './projects.css';
import '../../../src/project.json';


function Projects (props) {
    return (
        <div class="container">

        
            <div class="card" id={"background" + props.id}>
                <div class="overview" >
                    <p id={"overview" + props.id}>{props.overview}</p>
                </div>
                <div class="mockup">
                    <h1 id={"mockup" + props.id}>{props.mockup}</h1>
                    <img src={props.image} alt={props.alt} id={"img" + props.id}></img>
                    <div class="links">
                        <button class="btn-deployed" target='_blank' onclick="window.location={props.deployed}" id={"deployed" + props.id}>Deployed</button>
                        <button class="btn-github" target='_blank' onclick="window.location={props.github}" id={"github" + props.id}>GitHub</button>
                    </div>
                </div>  
            </div>

        </div>
    )
}

export default Projects;
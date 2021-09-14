import React from 'react';
import './projects.css';
import '../../../src/project.json';


function Projects (props) {
    return (
        <div class="container">

        
            <div class="card" id={"background" + props.id} alt= {props.id}>
                <div class="light-background" id={"light-background" + props.id}></div>
                <div class="overview">
                    <p id={"overview" + props.id}>{props.overview}</p>
                </div>
                <div class="mockup">
                    <h1 id={"mockup" + props.id}>{props.mockup}</h1>
                    <div class="links">
                        <button class="btn-deployed" target='_blank' onclick="location.href={props.deployed}" id={"deployed" + props.id}>Deployed</button>
                        <button class="btn-github" target='_blank' onclick="window.location={props.github}" id={"github" + props.id}>GitHub</button>
                    </div>
                </div>  
            </div>

        </div>
    )
}

export default Projects;
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
                        <a href={props.deployed} target='_blank'>
                            <button class="btn-deployed">Deployed</button>
                        </a>
                        <a href={props.github} target='_blank'>
                            <button class="btn-github">GitHub</button>
                        </a>
                    </div>
                </div>  
            </div>

        </div>
    )
}

export default Projects;
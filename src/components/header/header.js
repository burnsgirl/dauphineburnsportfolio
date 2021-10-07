import React from 'react';
import "./header.css";
import Resume from "../../Dauphine Burns Web Resume.pdf";

function Header() {
    return (
        <header className="container">
        <div className="header">
            <div id="pic">
                <img src="assets/header/me.jpg" alt="Girl with blonde hair standing outside."/>
            </div>
            <nav className="navbar">
                <div className="navbar-left">
                    <p id="name">DAUPHINE BURNS</p>
                </div>

                <div className="navbar-right">
                    <ul id="about">
                        <a href="#about">About |</a>
                        <a href="#work">Work |</a>
                        <a href={Resume} target="_blank">Resume</a>
                    </ul>
                </div>
            </nav>

            <div className="aboutmeoverview">
                <p id="aboutme">Inspirational and hardworking individual with extensive skills in HTML, CSS, React, and JavaScript. A very coordinated and well organized team player with the ability to learn quickly. Great at communicating with others to accomplish a goal or task.</p>
                {/* <img src="assets/header/skills.jpg"></img> */}
                {/* <div id="betterWork">
                    <p id="skills"><i class="fab fa-html5 fa-3x"></i>        <i class="fab fa-css3-alt fa-3x"></i>        <i class="fab fa-js-square fa-3x"></i>        <i class="fab fa-react fa-3x"></i>        <i class="fab fa-node-js fa-3x"></i></p>
               
                </div> */}
                <div className="contact">
                    <ul>
                        <a id="number" href="#about">210-722-1739 |</a>
                        <a id="email" href="#about">dauphineburns@gmail.com |</a>
                        <a href="https://www.linkedin.com/in/dauphine-burns-b2b289134/" target='_blankl' id="linkedin">LinkedIn |</a>
                        <a href="https://github.com/burnsgirl" target='_blankl' id="github">GitHub</a>
                    </ul>
                   
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;
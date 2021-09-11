import React from 'react';
import "./header.css";

function Header() {
    return (
        <header class="container">
        <div class="header">
            <div id="pic">
                <img src="assets/header/me.jpg" alt="Girl with blonde hair standing outside."/>
            </div>
            <nav class="navbar">
                <div class="navbar-left">
                    <p id="name">DAUPHINE BURNS</p>
                </div>

                <div class="navbar-right">
                    <ul id="about">
                        <a href="#about">About |</a>
                        <a href="#work">Work |</a>
                        <a href="./Web Resume.pdf">Resume</a>
                    </ul>
                </div>
            </nav>

            <div class="aboutmeoverview">
                <p id="aboutme">Inspirational and hardworking individual with extensive skills in different applications with the ability to learn quickly. A very coordinated and well organized individual that looks for areas of opportunity for growth in myself. Great at communicating with others to accomplish a goal or task.</p>
                <div class="contact">
                    <ul>
                        <a id="number" href="#about">210-722-1739 |</a>
                        <a id="email" href="#about">dauphineburns@gmail.com |</a>
                        <a href="https://www.linkedin.com/in/dauphine-burns-b2b289134/" id="linkedin">LinkedIn |</a>
                        <a href="https://github.com/burnsgirl"  id="github">GitHub</a>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;
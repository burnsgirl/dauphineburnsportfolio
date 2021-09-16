import React from 'react';
import "./footer.css";

function Footer () {
    return (
        <div class="footer container">
            <ul>
                <li>
                    <a id="numberf" href="#about">210-722-1739</a>
                </li>
                <li>
                    <a id="emailf" href="#about">dauphineburns@gmail.com</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dauphine-burns-b2b289134/" target='_blank' id="linkedinf">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/burnsgirl"  target='_blank' id="githubf">GitHub</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;
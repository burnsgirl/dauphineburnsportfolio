import React, { Component } from "react";
import './App.css';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import project from './project.json';


class App extends Component {
  state = {
    project
  };

  render() {
    return (
      <>
      <Header />
      {this.state.project.map(projects => (
        <Projects 
        id={projects.id}
        mockup={projects.mockup}
        image={projects.image}
        alt={projects.alt}
        overview={projects.overview}
        deployed={projects.deployed}
        github={projects.github}
        />
      ))}
      </>
    )
  }
}

export default App;

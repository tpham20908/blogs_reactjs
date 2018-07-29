import React, { Component } from 'react'

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
        projectItems = this.props.projects.map(project => {
            console.log(project);
        });
    }
    return (
      <div className="Projects">
        My Projects
      </div>
    )
  }
}

export default Projects;
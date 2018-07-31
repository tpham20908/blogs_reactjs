import React, { Component } from 'react'

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} |&nbsp;
        <a href="#" onClick = {this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
      </li>
    )
  }
}
/*
ProjectItem.propTypes = {
  onDelete: React.PropTypes.func,
  project: React.PropTypes.object
}
*/
export default ProjectItem;
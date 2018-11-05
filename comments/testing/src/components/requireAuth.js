import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAwar();
    }
  
    componentDidUpdate() {
      this.shouldNavigateAwar();
    }
  
    shouldNavigateAwar() {
      if (!this.props.auth) {
        // console.log("I NEED TO LEAVE!!!");
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({auth}) => ({auth});

  return connect(mapStateToProps)(ComposedComponent);
}
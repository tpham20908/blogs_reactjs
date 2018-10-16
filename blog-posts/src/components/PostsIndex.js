import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const renderPosts = _.map(this.props.posts, post => {
      const id = post.id;
      const title = post.title;

      return (
        <li key={id} className="list-group-item">{title}</li>
      )
    })

    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {renderPosts}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => (
  { posts: state.posts }
)

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <li key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </li>
    ))

    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {postItems}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

/*
const mapDispatchToProps = () => ({
  fetchPosts: fetchPosts
})
*/

export default connect(mapStateToProps, { fetchPosts })(Posts);
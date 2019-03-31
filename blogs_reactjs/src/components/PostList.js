import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    console.log(this.props.posts);
    
    const postsList = this.props.posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ));

    return (
      <div>
        <ul>{postsList}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postsList = this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"
            style={{
              color: "#234599",
              fontSize: "3rem",
              margin: "2rem"
            }} />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    });

    return (
      <div className="ui relaxed divided list">
        {postsList}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
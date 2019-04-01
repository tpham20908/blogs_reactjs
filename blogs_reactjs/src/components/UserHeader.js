import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);

    if (!user) {
      return null;
    }

    return (
      <div className="header">
        Author: <em>{user.name}</em>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return { users }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);
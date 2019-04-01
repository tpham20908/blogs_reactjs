import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    const { user } = this.props;

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

const mapStateToProps = ({ users }, ownProps) => {
  return { user: users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader);
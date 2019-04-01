import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

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

export default connect(mapStateToProps, { fetchUser })(UserHeader);
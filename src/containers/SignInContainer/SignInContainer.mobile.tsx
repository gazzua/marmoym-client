import * as React from 'react';
import { connect } from 'react-redux';

import SignIn from '@src/components/app/SignIn/SignIn';
import { SignInContainer } from '@src/containers/ContainerTypes';
import { createAction, ActionTypes } from '@actions/index';

class SignInContainer extends React.Component<SignInContainer.Props, SignInContainer.State> {
  constructor(...props) {
    super(...props);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
  }

  handleChangeUsername(event) {
    this.setState((state, props) => {
      return {
        username: event.target.value
      }
    })
    console.log(123, event);
  }

  render() {
    return (
      <SignIn
        value={this.state.username}
        member={this.props.member}
        handleChangeUsername={this.handleChangeUsername}
        handleChangePassword={''}/>
    );
  }
}

export default SignInContainer;
import * as React from 'react';
import { connect } from 'react-redux';

import SignIn from '@src/components/app/SignIn/SignIn';
import { SignInContainer } from '@src/containers/ContainerTypes';
import { createAction, ActionTypes } from '@actions/index';

class SignInContainer extends React.Component<SignInContainer.Props> {
  constructor(...props) {
    super(...props);
  }

  render() {
    return (
      <SignIn
        member={this.props.member}/>
    );
  }
}

export default SignInContainer;
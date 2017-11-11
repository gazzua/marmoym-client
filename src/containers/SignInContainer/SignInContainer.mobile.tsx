import * as React from 'react';
import { connect } from 'react-redux';

import SignIn from '@src/components/app/SignIn/SignIn';

class SignInContainer extends React.Component<any> {
  constructor(...props) {
    super(...props);
  }

  public render() {
    return (
      <SignIn
        member={this.props.member}/>
    );
  }
}

export default SignInContainer;

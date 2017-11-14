import * as React from 'react';
import { connect } from 'react-redux';

import SignIn from '@src/components/app/SignIn/SignIn';
import { SignInContainer } from '@src/containers/ContainerTypes';
import KeyCode from '@src/models/KeyCode';
import MouseEvent from '@src/models/MouseEvent';
import Action from '@actions/Action';

class SignInContainer extends React.Component<any, any> {
  constructor(...props) {
    super(...props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChangeEmail(event) {
    const email = event.target.value
    this.setState((state, props) => {
      return {
        ...state,
        email: email
      }
    })
  }

  handleChangePassword(event) {
    const password = event.target.value
    this.setState((state, props) => {
      return {
        ...state,
        password: password
      }
    })
  }

  handleKeyDown(e) {  
    if (e.keyCode === KeyCode.RETURN) {
      this.props.dispatch(Action.SIGN_IN_USER({
        email: this.state.email, 
        password: this.state.password 
      }));  
    }
  }

  handleClick(e) {
    if (e.nativeEvent.which === MouseEvent.LEFT_CLICK) {
      this.props.dispatch(Action.SIGN_IN_USER({
        email: this.state.email, 
        password: this.state.password 
      }));  
    }
  }

  public render() {
    return (
      <SignIn
        value={this.state.email}
        member={this.props.member}
        handleChangeEmail={this.handleChangeEmail}
        handleChangePassword={this.handleChangePassword}
        handleKeyDown={this.handleKeyDown}
        handleClick={this.handleClick}/>
    );
  }
}

export default connect()(SignInContainer);

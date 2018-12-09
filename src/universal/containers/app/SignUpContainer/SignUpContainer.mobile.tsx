import { compose } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { 
  RouteComponentProps,
  Redirect, 
  withRouter,
} from 'react-router';

import { ConnectedReduxProps } from '@universal/state/configureStore';
import { requestSignUpUser } from '@actions/userActions';
import SignUp from '@components/app/SignUp/SignUp.mobile';
import Terms from '@components/app/Terms/Terms.mobile';

class SignUpContainer extends React.Component<SignUpContainerProps, SignUpContainerStates> {
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordDoubleCheck = this.handleChangePasswordDoubleCheck.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleClickSignUp = this.handleClickSignUp.bind(this);
    this.handleClickTermsAgree = this.handleClickTermsAgree.bind(this);
    this.state = {
      email: '',
      password1: '',
      password2: '',
      userDidAgree: false,
      username: '',
    };
  }

  dispatchSignUp() {
    this.props.dispatch(requestSignUpUser({
      email: this.state.email,
      password: this.state.password1,
      username: this.state.username,
    }));
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        email,
      };
    });
  }

  handleChangePassword(event) {
    const password1 = event.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        password1,
      };
    });
  }

  handleChangeUsername(event) {
    const username = event.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        username,
      };
    });
  }

  handleChangePasswordDoubleCheck(event) {
    const password2 = event.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        password2,
      };
    });
  }

  handleClickSignUp(event) {
    if (checkPassword(this.state.password1, this.state.password2)) {
      this.dispatchSignUp();
    }
  }

  handleClickTermsAgree(event) {
    const userDidAgree = true;
    
    this.setState((state, props) => {
      return {
        ...state,
        userDidAgree,
      };
    });
  }

  render() {
    return (this.state.userDidAgree === true) 
      ? <SignUp
          email={this.state.email}
          handleChangeEmail={this.handleChangeEmail}
          handleChangePassword={this.handleChangePassword}
          handleChangePasswordDoubleCheck={this.handleChangePasswordDoubleCheck}
          handleChangeUsername={this.handleChangeUsername}
          handleClick={this.handleClickSignUp}
          password={this.state.password1}
          password2={this.state.password2}
          username={this.state.username}
        />
      : <Terms
          handleClickTermsAgree={this.handleClickTermsAgree}
        />;
  }
}

function checkPassword(password, passwordDoubleCheck) {
  if (password === passwordDoubleCheck) {
    return true;
  }

  window.alert("Password does not match the confirm password.")
  return false;
}

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      ...state,
    }
  }
}

export default compose<any>(
  withRouter,
  connect(makeMapStateToProps)
)(SignUpContainer);

interface SignUpContainerProps extends ConnectedReduxProps, RouteComponentProps {
}

interface SignUpContainerStates {
  email: string,
  password1: string,
  password2: string,
  userDidAgree: boolean,
  username: string,
}

import * as React from 'react';
import { connect } from 'react-redux';

import SignUp from '@src/components/app/SignUp/SignUp.mobile';
import Terms from '@src/components/app/Terms/Terms.mobile';
import Action from '@actions/Action';
import MouseEvent from '@src/models/MouseEvent';
import { requestSignUpUser } from '@actions/userActions'

class SignUpContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordDoubleCheck = this.handleChangePasswordDoubleCheck.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleClickSignUp = this.handleClickSignUp.bind(this);
    this.handleClickTermsAgree = this.handleClickTermsAgree.bind(this);
    this.state = {
      email: '',
      password: '',
      username: '',
      userDidAgree: false,
    };
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
    const password = event.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        password,
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
    const passwordDoubleCheck = event.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        passwordDoubleCheck,
      }
    })
  }

  handleClickSignUp(event) {
    if (event.nativeEvent.which === MouseEvent.LEFT_CLICK && checkPassword(this.state.password, this.state.passwordDoubleCheck)) {
      this.props.dispatch(requestSignUpUser({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
      }));
    }
  }

  handleClickTermsAgree(event) {
    const userDidAgree = true;
    if (event.nativeEvent.which === MouseEvent.LEFT_CLICK) {
      console.log(2222222)
      this.setState((state, props) => {
        return {
          ...state,
          userDidAgree,
        }
      })
    }
  }

  render() {
    return (this.state.userDidAgree === true) 
      ? <SignUp
          value={this.state.email}
          member={this.props.member}
          handleChangeEmail={this.handleChangeEmail}
          handleChangePassword={this.handleChangePassword}
          handleChangePasswordDoubleCheck={this.handleChangePasswordDoubleCheck}
          handleChangeUsername={this.handleChangeUsername}
          handleClick={this.handleClickSignUp}/>
      : <Terms
          handleClickTermsAgree={this.handleClickTermsAgree}/>;
  }
}

// function mapDispatchToProps(dispatch) {
//   return({
//     signUpUser: (state) => {
//       dispatch(Action.SIGN_UP_USER({
//         email: state.email,
//         password: state.password,
//         username: state.username,
//       }));
//     },
//   });
// }

function checkPassword(password, passwordDoubleCheck) {
  if(password === passwordDoubleCheck) {
    return true;
  }
  console.log("password wrong");
  return false;
}

export default connect()(SignUpContainer);

import * as React from 'react';
import { connect } from 'react-redux';

import KeyCode from '@src/models/KeyCode';
import MouseEvent from '@src/models/MouseEvent';
import Action from '@actions/Action';
import User from '@components/app/User/User.mobile';

class UserContainer extends React.Component {
  constructor(...props) {
    super(...props);
  }
  render() {
    return (
      <User/>
    );
  }
}

export default connect()(UserContainer);
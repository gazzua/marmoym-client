import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Masthead from '@src/components/app/Masthead/Masthead';
import { MastheadContainer } from '@src/containers/ContainerTypes';
import KeyCode from '@src/models/KeyCode';

class MastheadContainer extends React.Component<MastheadContainer.Props> {
  constructor() {
    super();
    this.handleClickAddTerm = this.handleClickAddTerm.bind(this);
    this.handleClickMarmoymLogo = this.handleClickMarmoymLogo.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClickMarmoymLogo() {
    this.props.history.push('/');
  }

  handleClickAddTerm() {
    this.props.history.push("/define");
  }

  handleKeyDown(e) {
    if (e.keyCode === KeyCode.RETURN) {
      // todo search action
    }  
  }

  render() {
    return (
      <Masthead
        pathname={this.props.location.pathname}
        handleClickMarmoymLogo={this.handleClickMarmoymLogo}
        handleClickAddTerm={this.handleClickAddTerm}
        handleKeyDown={this.handleKeyDown}/>
    );
  }
}

export default withRouter(connect()(MastheadContainer));
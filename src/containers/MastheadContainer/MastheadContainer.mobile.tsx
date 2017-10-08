import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Masthead from '@src/components/app/Masthead/Masthead';
import { MastheadContainer } from '@src/containers/ContainerTypes';

class MastheadContainer extends React.Component<MastheadContainer.Props> {
  constructor() {
    super()
    this.handleClickAddTerm = this.handleClickAddTerm.bind(this)
  }

  handleClickAddTerm() {
    console.log("add term click");
    this.props.history.push("/define")
  }

  render() {
    return (
      <Masthead
        history={1}
        pathname={this.props.location.pathname}
        handleClickAddTerm={this.handleClickAddTerm}/>
    );
  }
}

export default withRouter(connect()(MastheadContainer));
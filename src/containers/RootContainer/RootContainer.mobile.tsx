import * as React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import globalStyle from '@src/styles/global';
import Root from '@src/components/app/Root/Root';
import { RootContainer } from '@src/containers/ContainerTypes';
import { createAction, ActionTypes } from '@actions/index';

class RootContainer extends React.Component<RootContainer.Props, {}> {
  componentDidMount() {
    console.log("app container will mount");
    globalStyle();
  }

  render() {
    return (
      <Root>
        {this.props.children}
      </Root>
    );
  }
}

export default withRouter(connect()(RootContainer));
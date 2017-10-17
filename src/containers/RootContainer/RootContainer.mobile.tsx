import * as React from 'react';
import { withRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import globalStyle from '@src/styles/global';
import Root from '@src/components/app/Root/Root';
import { RootContainer } from '@src/containers/ContainerTypes';
import { action, ActionTypes } from '@actions/index';

class RootContainer extends React.Component<RootContainer.Props, {}> {
  componentDidMount() {
    console.log("app container will mount");
    globalStyle();
    require('font-awesome/css/font-awesome.css');
    this.props.dispatch(action(ActionTypes.GET_LOCALE, {
      locale: 'ko'
    }));
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
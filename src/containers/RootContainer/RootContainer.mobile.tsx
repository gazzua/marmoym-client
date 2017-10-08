import * as React from 'react';
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import globalStyle from '@src/styles/global';
import Root from '@src/components/app/Root/Root';
// import * as translateActions from '@src/store/actions/translateActions';
import { RootContainer } from '@src/containers/ContainerTypes';
import { action, ActionTypes } from '@actions/index';

class RootContainer extends React.Component<RootContainer.Props, {}> {
  componentDidMount() {
    globalStyle();
    require('font-awesome/css/font-awesome.css');
    this.props.dispatch(action(ActionTypes.GET_TRANSLATE, {
      locale: 'ko'
    }));
    console.log("app container will mount");
  }

  render() {
    return (
      <Root>
        {this.props.children}
      </Root>
    );
  }
}

export default connect()(RootContainer);
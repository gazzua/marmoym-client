import * as React from 'react';
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import globalStyle from '@src/styles/global';
import Root from '@src/components/app/Root/Root';
import * as translateActions from '@src/actions/translateActions';
import { RootContainer } from '@src/containers/ContainerTypes';

class RootContainer extends React.Component<RootContainer.Props, {}> {
  componentDidMount() {
    globalStyle();
    require('font-awesome/css/font-awesome.css');
    this.props.dispatch(translateActions.requestGetTranslate('ko'));
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
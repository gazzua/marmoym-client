import * as React from 'react';
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';

import globalStyle from '@src/styles/global';
import Root from '@src/components/app/Root/Root';
import { translateActions } from '@src/actions';
import { RootContainerProps } from '@src/components/ComponentTypes';

class RootContainer extends React.Component<RootContainerProps, {}> {
  componentWillMount() {
    globalStyle();
    require('font-awesome/css/font-awesome.css');
    console.log(12322, this.props);
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
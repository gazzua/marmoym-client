import * as React from 'react';
import { injectGlobal } from 'styled-components';

import globalStyle from 'styles/global';
import MastheadContainer from 'containers/MastheadContainer/MastheadContainer';
import PageContainer from 'containers/PageContainer/PageContainer';
import App from 'components/App/App';

interface AppContainerProps {
    masthead?: typeof MastheadContainer;
    pageContent?: any;
}

class AppContainer extends React.Component<AppContainerProps, {}> {
  componentWillMount() {
    globalStyle();
    console.log("app container will mount");
  }

  render() {
    return (
      <App>
        {this.props.children}
      </App>
    );
  }
}

export default AppContainer;
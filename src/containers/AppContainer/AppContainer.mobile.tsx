import * as React from 'react';
import { injectGlobal } from 'styled-components';

import globalStyle from 'styles/global';
import App from 'components/App/App';

class AppContainer extends React.Component {
  componentWillMount() {
    globalStyle();
    require('font-awesome/css/font-awesome.css');
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
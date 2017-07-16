import * as React from 'react';
import { injectGlobal } from 'styled-components';

import commonStyle from '../../styles/common';
import MastheadContainer from '../MastheadContainer/MastheadContainer';
import PageContainer from '../PageContainer/PageContainer';
import App from '../../components/App/App';

interface AppContainerProps {
    masthead?: typeof MastheadContainer,
    page?: typeof PageContainer,
}

class AppContainer extends React.Component<AppContainerProps, {}> {
  componentWillMount() {
    console.log("app container will mount");
    commonStyle();
  }

  render() {
    const innerClassName = 'inner';
    return (
      <App innerClassName={innerClassName}>
        <div className={innerClassName}>
          <MastheadContainer
            masthead={this.props.masthead}/>
          <PageContainer
            page={this.props.page}/>  
        </div>
      </App>
    )
  }
}

export default AppContainer;
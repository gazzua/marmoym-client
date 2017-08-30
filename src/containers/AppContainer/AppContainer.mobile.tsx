import * as React from 'react';
import { injectGlobal } from 'styled-components';

import globalStyle from '../../styles/global';
import MastheadContainer from '../MastheadContainer/MastheadContainer';
import PageContainer from '../PageContainer/PageContainer';
import App from '../../components/App/App';

interface AppContainerProps {
    masthead?: typeof MastheadContainer,
    pageContent?: any,
}

class AppContainer extends React.Component<AppContainerProps, {}> {
  componentWillMount() {
    console.log("app container will mount");
    globalStyle();
  }

  render() {
    const innerClassName = 'inner';
    return (
      <App innerClassName={innerClassName}>
        <div className={innerClassName}>
          <MastheadContainer
            masthead={this.props.masthead}/>
          <PageContainer
            content={this.props.pageContent}/>  
        </div>
      </App>
    )
  }
}

export default AppContainer;
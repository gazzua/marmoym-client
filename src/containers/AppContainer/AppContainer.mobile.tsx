import * as React from 'react';

const styles = require("./AppContainer.mobile.scss");
import MastheadContainer from '../MastheadContainer';
import PageContainer from '../PageContainer';

interface AppContainerProps {
    masthead?: typeof MastheadContainer,
    page?: typeof PageContainer,
}

class AppContainer extends React.Component<AppContainerProps, {}> {
  componentWillMount() {
    console.log("app container will mount");
    require('../../styles/common.scss');
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <MastheadContainer/>
          <PageContainer/>  
        </div>
      </div>
    )
  }
}

export default AppContainer;
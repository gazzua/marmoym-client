import * as React from 'react';

const styles = require("./AppContainer.scss");
import MastheadContainer from '../MastheadContainer/MastheadContainer';
import PageContainer from '../PageContainer/PageContainer';

interface AppContainerProps {
    masthead?: typeof MastheadContainer,
    page?: typeof PageContainer,

}

class AppContainer extends React.Component<AppContainerProps, {}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <MastheadContainer/>
        <PageContainer/>
      </div>
    )
  }
}

export default AppContainer;
import * as React from 'react';

const styles = require("./PageContainer.scss");
import TermListContainer from '../TermListContainer/TermListContainer';

class PageContainer extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <TermListContainer/>
      </div>
    )
  }
}

export default PageContainer;
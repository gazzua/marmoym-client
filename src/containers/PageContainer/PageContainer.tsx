import * as React from 'react';

const styles = require("./PageContainer.scss");

class PageContainer extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
    )
  }
}

export default PageContainer;
import * as React from 'react';

const styles = require("./PageContainer.mobile.scss");
import TermListContainer from '../TermListContainer/TermListContainer';

export namespace PageContainer {
  export interface Props {
    page: any;
  }
}

class PageContainer extends React.Component<PageContainer.Props> {
  render() {
    const Page = this.props.page;
    return (
      <div className={styles.wrapper}>
        {this.props.page ? <Page/> : null}
      </div>
    )
  }
}

export default PageContainer;
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import Page from '@src/components/app/Page/Page';

export namespace PageContainer {
  export interface Props {
    content: any;
  }
}

class PageContainer extends React.Component<PageContainer.Props> {
  render() {
    return (
      <Page content={this.props.content}/>
    )
  }
}

export default PageContainer;
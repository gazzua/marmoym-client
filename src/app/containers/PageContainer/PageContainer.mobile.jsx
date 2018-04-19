import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import Page from '@src/components/app/Page/Page';

class PageContainer extends React.Component {
  render() {
    return (
      <Page content={this.props.content}/>
    );
  }
}

export default PageContainer;

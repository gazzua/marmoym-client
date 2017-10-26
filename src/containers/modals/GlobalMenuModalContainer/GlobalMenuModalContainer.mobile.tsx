import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';

import DefaultModal from '@components/modals/DefaultModal/DefaultModal';
import DefaultModalContainer from '@containers/modals/DefaultModalContainer/DefaultModalContainer';
import GlobalMenuModal from '@components/modals/GlobalMenuModal/GlobalMenuModal';
import { GlobalMenuModalContainer } from '@containers/ContainerTypes';

class GlobalMenuModalContainer extends React.Component<GlobalMenuModalContainer.Props> {
  render() {
    return (
      <DefaultModalContainer
        handleClickBackdrop={this.props.handleClickBackdrop}>
        <GlobalMenuModal/>
      </DefaultModalContainer>
    );
  }
}

export default GlobalMenuModalContainer;
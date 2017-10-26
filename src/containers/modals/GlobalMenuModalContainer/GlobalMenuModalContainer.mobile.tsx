import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'; 

import DefaultModal from '@components/modals/DefaultModal/DefaultModal';
import DefaultModalContainer from '@containers/modals/DefaultModalContainer/DefaultModalContainer';
import GlobalMenuModal from '@components/modals/GlobalMenuModal/GlobalMenuModal';
import { GlobalMenuModalContainer } from '@src/models/ContainerTypes';

class GlobalMenuModalContainer extends React.Component<GlobalMenuModalContainer.Props> {
  constructor() {
    super();
    this.handleClickSignIn=this.handleClickSignIn.bind(this);
  }

  handleClickSignIn(e) {
    this.props.history.push('/signin');
  }

  render() {
    return (
      <DefaultModalContainer
        handleClickBackdrop={this.props.handleClickBackdrop}>
        <GlobalMenuModal
          handleClickBackdrop={this.props.handleClickBackdrop}
          handleClickSignIn={this.handleClickSignIn}/>
      </DefaultModalContainer>
    );
  }
}

export default withRouter(connect()(GlobalMenuModalContainer));
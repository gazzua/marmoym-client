import { compose } from 'redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';

import DefaultModal from '@components/modals/DefaultModal/DefaultModal.mobile';

class DefaultModalContainer extends React.Component<DefaultModalContainerProps, any> {
  container: any;

  constructor(props) {
    super(props);

    this.container = document.getElementById('app-root');
  }

  render() {
    return ReactDOM.createPortal(
      <DefaultModal 
        handleClickBackdrop={this.props.handleClickBackdrop}
      >
        {this.props.children}
      </DefaultModal>,
      this.container,
    );
  }
}

export default compose<any>()(DefaultModalContainer); 

interface DefaultModalContainerProps {
  container: any;
  handleClickBackdrop: any;
}

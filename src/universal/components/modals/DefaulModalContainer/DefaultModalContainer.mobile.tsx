import { compose } from 'redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';

import { canUseDOM } from '@utils/envUtils'
import DefaultModal from '@components/modals/DefaultModal/DefaultModal.mobile';

class DefaultModalContainer extends React.Component<DefaultModalContainerProps, any> {
  container: any;

  constructor(props) {
    super(props);

    this.container = () => {
      if (!canUseDOM) {
        return <div></div>;
      } else {
        return ReactDOM.createPortal(
          <DefaultModal 
            handleClickBackdrop={this.props.handleClickBackdrop}
            show={this.props.show}
          >
            {this.props.children}
          </DefaultModal>,
          window.document.getElementById('app-root'),
        );
      }
    }
  }

  render() {
    return this.container();
  }
}

export default compose<any>()(DefaultModalContainer); 

interface DefaultModalContainerProps {
  container: any;
  handleClickBackdrop: any;
  show: any;
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';

import { DefaultModalContainer } from '@src/models/ContainerTypes';
import DefaultModal from '@components/modals/DefaultModal/DefaultModal';

class DefaultModalContainer extends React.Component<DefaultModalContainer.Props, any> {
  container: any;

  constructor(props) {
    super(props);
    /**
     * `id` property of HTML node where modals land.
     * It is possible to be designated in constructor since the node
     * exists in the html itself, not in React DOM tree.
     */
    this.container = document.getElementById('marmoym-modal');
  }

  render() {
    return ReactDOM.createPortal(
      <DefaultModal 
        handleClickBackdrop={this.props.handleClickBackdrop}>
        {this.props.children}
      </DefaultModal>,
      this.container,
    );
  }
}

export default DefaultModalContainer;
import { compose } from 'redux';
import * as React from 'react';
import { connect } from 'react-redux'; 

import DefaultModalContainer from '@components/modals/DefaulModalContainer/DefaultModalContainer.mobile';
import GlobalMenuModal from '@components/modals/GlobalMenuModal/GlobalMenuModal.mobile';

class GlobalMenuModalContainer extends React.Component<GlobalMenuModalContainerProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultModalContainer
        handleClickBackdrop={this.props.handleClickBackdrop}
        show={this.props.show}
      >
        <GlobalMenuModal
          handleClickBackdrop={this.props.handleClickBackdrop}
          handleClickSignIn={this.props.handleClickSignIn}
          show={this.props.show}
        />
      </DefaultModalContainer>
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      ...state,
    };
  };
};

export default compose<any>(
  connect(makeMapStateToProps),
)(GlobalMenuModalContainer);

interface GlobalMenuModalContainerProps {
  handleClickBackdrop: any;
  handleClickHamburgerIcon: any;
  handleClickSignIn: any;
  show: any;
}

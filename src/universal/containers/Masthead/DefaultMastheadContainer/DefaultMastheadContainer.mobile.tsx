import { compose } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import AppURL from '@universal/constants/AppURL';
import { ConnectedReduxProps } from '@universal/state/configureStore';
import DefaultMasthead from '@components/Masthead/DefaultMasthead/DefaultMasthead.mobile';
import KeyCode from '@constants/KeyCode';
import withUuid from '@hocs/withUuid';

class DefaultMastheadContainer extends React.Component<DefaultMastheadContainerProps, DefaultMastheadContainerStates> {
  constructor(props) {
    super(props);
    this.handleClickBackdrop = this.handleClickBackdrop.bind(this);
    this.handleClickHamburger = this.handleClickHamburger.bind(this);
    this.handleClickLeftArrow = this.handleClickLeftArrow.bind(this);
    this.handleClickPencil = this.handleClickPencil.bind(this);
    this.handleClickMarmoymLogo = this.handleClickMarmoymLogo.bind(this);
    this.handleClickSignIn = this.handleClickSignIn.bind(this);
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      displayName: '',
      isSearching: false,
      modalIsVisible: false,
      query: '',
    };
  }

  handleChangeQuery(e) {
    const query = e.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        query,
      };
    });
  }

  handleClickBackdrop(e) {
    this.setState((state, props) => {
      return {
        ...state,
        modalIsVisible: false,
      };
    });
  }

  handleClickLeftArrow() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: '',
        isSearching: false,
        query: '',
      };
    });
  }

  handleClickMarmoymLogo() {
    this.props.history.push('/');
  }

  handleClickPencil() {
    this.props.history.push('/define');
  }

  handleClickSearch() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: 'SEARCH',
        isSearching: true,
      };
    });
  }

  handleClickHamburger(e) {
    this.setState((state, props) => {
      return {
        ...state,
        modalIsVisible: true,
      };
    });
  }

  handleClickSignIn(e) {
    this.props.history.push('/signin');
    this.handleClickBackdrop(e);
  }

  handleKeyDown(e) {
    if (e.keyCode === KeyCode.RETURN) {
      this.setState((state, props) => {
        return {
          ...state,
          displayName: '',
          isSearching: false,
          query: '',
        };
      });
      this.props.history.push(`/search?q=${this.state.query}`);
    }
  }

  render() {
    return (
      <DefaultMasthead
        handleChangeQuery={this.handleChangeQuery}
        handleClickBackdrop={this.handleClickBackdrop}
        handleClickHamburger={this.handleClickHamburger}
        handleClickLeftArrow={this.handleClickLeftArrow}
        handleClickMarmoymLogo={this.handleClickMarmoymLogo}
        handleClickPencil={this.handleClickPencil}
        handleClickSearch={this.handleClickSearch}
        handleClickSignIn={this.handleClickSignIn}
        handleKeyDown={this.handleKeyDown}
        isSearching={this.state.isSearching}
        modalIsVisible={this.state.modalIsVisible}
        query={this.state.query}
        searchRequested={this.props.searchRequested}
      />
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
      ...state
    };
  };
};

export default compose<any>(
  withRouter,
  withUuid,
  connect(makeMapStateToProps),
)(DefaultMastheadContainer);

interface DefaultMastheadContainerProps extends ConnectedReduxProps, RouteComponentProps {
  componentId: String,
  searchRequested: any,
}

interface DefaultMastheadContainerStates {
  displayName: String,
  isSearching: Boolean,
  modalIsVisible: Boolean,
  query: String,
}

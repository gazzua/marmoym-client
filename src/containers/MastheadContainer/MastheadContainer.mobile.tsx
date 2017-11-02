import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Masthead from '@src/components/app/Masthead/Masthead';
import { MastheadContainerProps, MastheadContainerState } from '@src/models/ContainerTypes';
import KeyCode from '@src/models/KeyCode';
import { createAction, ActionTypes } from '@actions/index';
import DefaultMasthead from '@components/app/Masthead/DefaultMasthead/DefaultMasthead';
import SearchMasthead from '@components/app/Masthead/SearchMasthead/SearchMasthead';

class MastheadContainer extends React.Component<MastheadContainerProps, MastheadContainerState> {
  constructor() {
    super();
    this.handleClickHamburgerIcon = this.handleClickHamburgerIcon.bind(this);
    this.handleClickPencilIcon = this.handleClickPencilIcon.bind(this);
    this.handleClickMarmoymLogo = this.handleClickMarmoymLogo.bind(this);
    this.handleClickSearchIcon = this.handleClickSearchIcon.bind(this);
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickLeftArrowIcon = this.handleClickLeftArrowIcon.bind(this);
    this.handleClickBackdrop = this.handleClickBackdrop.bind(this);
    this.state = {
      displayName: '',
      modalIsVisible: false,
      query: '',
    };
  }

  private handleClickMarmoymLogo() {
    this.props.history.push('/');
  }

  private handleClickPencilIcon() {
    this.props.history.push('/define');
  }

  private handleClickSearchIcon() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: 'SEARCH',
      };
    });
  }

  private handleChangeQuery(e) {
    const query = e.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        query,
      };
    });
  }

  private handleKeyDown(e) {
    if (e.keyCode === KeyCode.RETURN) {
      this.setState((state, props) => {
        return {
          displayName: '',
          query: '',
        };
      });
      this.props.history.push(`/search?q=${this.state.query}`);
    }
  }

  private handleClickLeftArrowIcon() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: '',
      };
    });
  }

  private handleClickHamburgerIcon(e) {
    this.setState((state, props) => {
      return {
        modalIsVisible: true,
      };
    });
  }

  private handleClickBackdrop(e) {
    this.setState((state, props) => {
      return {
        modalIsVisible: false,
      };
    });
  }

  private resolveName(pathname, displayName) {
    return displayName.length ? displayName : pathname;
  }

  public render() {
    const { pathname } = this.props.location;
    const displayName = this.resolveName(this.props.location.pathname, this.state.displayName);

    return (
      <Masthead
        displayName={displayName}
        query={this.state.query}
        handleChangeQuery={this.handleChangeQuery}
        handleClickLeftArrowIcon={this.handleClickLeftArrowIcon}
        handleKeyDown={this.handleKeyDown}
        searchRequested={this.props.searchRequested}
        modalIsVisible={this.state.modalIsVisible}
        handleClickSearchIcon={this.handleClickSearchIcon}
        handleClickMarmoymLogo={this.handleClickMarmoymLogo}
        handleClickPencilIcon={this.handleClickPencilIcon}
        handleClickHamburgerIcon={this.handleClickHamburgerIcon}
        handleClickBackdrop={this.handleClickBackdrop}/>
    );
  }
}

export default withRouter(connect()(MastheadContainer));

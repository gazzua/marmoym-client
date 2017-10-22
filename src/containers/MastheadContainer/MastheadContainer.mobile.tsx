import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Masthead from '@src/components/app/Masthead/Masthead';
import { MastheadContainer } from '@src/containers/ContainerTypes';
import KeyCode from '@src/models/KeyCode';
import { createAction, ActionTypes } from '@actions/index';

class MastheadContainer extends React.Component<MastheadContainer.Props, MastheadContainer.State> {
  constructor() {
    super();
    this.handleClickAddTerm = this.handleClickAddTerm.bind(this);
    this.handleClickMarmoymLogo = this.handleClickMarmoymLogo.bind(this);
    this.handleClickSearchIcon = this.handleClickSearchIcon.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickLeftArrow = this.handleClickLeftArrow.bind(this);
    this.state = {
      displayName: '',
      query: ''
    }
  }

  handleClickMarmoymLogo() {
    this.props.history.push('/');
  }

  handleClickAddTerm() {
    this.props.history.push('/define');
  }

  handleClickSearchIcon() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: 'SEARCH'
      }
    })
  }

  handleChange(e) {
    const query = e.target.value;
    this.setState((state, props) => {
      return {
        ...state,
        query: query
      }
    });
  }

  handleKeyDown(e) {  
    if (e.keyCode === KeyCode.RETURN) {
      this.setState((state, props) => {
        return {
          displayName: '',
          query: ''
        }
      })
      this.props.history.push(`/?search=${this.state.query}`);
    }
  }

  handleClickLeftArrow() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: ''
      }
    })
  }

  resolveName(pathname, displayName) {
    return displayName.length ? displayName : pathname;
  }

  render() {
    const { pathname } = this.props.location;
    
    return (
      <Masthead
        displayName={this.resolveName(this.props.location.pathname, this.state.displayName)}
        searchRequested={this.props.searchRequested}
        query={this.state.query}
        handleChange={this.handleChange}
        handleKeyDown={this.handleKeyDown}
        handleClickSearchIcon={this.handleClickSearchIcon}
        handleClickMarmoymLogo={this.handleClickMarmoymLogo}
        handleClickLeftArrow={this.handleClickLeftArrow}
        handleClickAddTerm={this.handleClickAddTerm}
        />
    );
  }
}

export default withRouter(connect()(MastheadContainer));
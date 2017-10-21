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
      name: '',
      query: ''
    }
  }

  handleClickMarmoymLogo() {
    this.props.history.push('/');
  }

  handleClickAddTerm() {
    this.props.history.push("/define");
  }

  handleClickSearchIcon() {
    this.setState((state, props) => {
      return {
        ...state,
        name: '/search'
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
      this.props.dispatch(createAction(ActionTypes.SEARCH, {
        query: this.state.query
      }));
    }
  }

  handleClickLeftArrow() {
    this.setState((state, props) => {
      return {
        ...state,
        name: ''
      }
    })
  }

  resolveName(pathname, name) {
    return name.length ? name : pathname;
  }

  render() {
    const { pathname } = this.props.location;
    
    return (
      <Masthead
        name={this.resolveName(this.props.location.pathname, this.state.name)}
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
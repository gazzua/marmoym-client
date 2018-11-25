import { compose } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { 
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';

import { ConnectedReduxProps } from '@universal/state/configureStore';
import Masthead from '@components/Masthead/Masthead/Masthead.mobile';
import DefineMastheadContainer from '@containers/Masthead/DefineMastheadContainer/DefineMastheadContainer.mobile';
import KeyCode from '@universal/constants/KeyCode';

class MastheadContainer extends React.Component<MastheadContainerProps, MastheadContainerStates> {
  constructor(props) {
    super(props);
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleClickLeftArrow = this.handleClickLeftArrow.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      displayName: '',
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
  
  handleClickLeftArrow() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: '',
      };
    });
  }

  handleKeyDown(e) {
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

  resolveName(pathname, displayName) {
    return displayName.length ? displayName : pathname;
  }

  render() {
    const displayName = this.resolveName(this.props.location.pathname, this.state.displayName);

    return (
      <Masthead
        displayName={displayName}
        handleChangeQuery={this.handleChangeQuery}
        handleClickLeftArrow={this.handleClickLeftArrow}
        handleKeyDown={this.handleKeyDown}
        modalIsVisible={this.state.modalIsVisible}
        query={this.state.query}
        searchRequested={this.props.searchRequested}
      />
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => ({
  });
};

export default compose<any>(
  withRouter,
  connect(makeMapStateToProps),
)(MastheadContainer);

interface MastheadContainerProps extends ConnectedReduxProps, RouteComponentProps {
  searchRequested: Boolean;
}

interface MastheadContainerStates {
  displayName: String,
  modalIsVisible: Boolean,
  query: String,
}

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

  handleClickMarmoymLogo() {
    this.props.history.push('/');
  }

  handleClickPencilIcon() {
    this.props.history.push('/define');
  }

  handleClickDefinition() {
    this.props.history.push('definitions/1');
  }

  handleClickSearchIcon() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: 'SEARCH',
      };
    });
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

  handleClickLeftArrowIcon() {
    this.setState((state, props) => {
      return {
        ...state,
        displayName: '',
      };
    });
  }

  handleClickHamburgerIcon(e) {
    this.setState((state, props) => {
      return {
        ...state,
        modalIsVisible: true,
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

  resolveName(pathname, displayName) {
    return displayName.length ? displayName : pathname;
  }

  render() {
    const displayName = this.resolveName(this.props.location.pathname, this.state.displayName);
  

    return (
      <Masthead/>
        // displayName={displayName}
        // query={this.state.query}
        // handleChangeQuery={this.handleChangeQuery}
        // handleClickLeftArrowIcon={this.handleClickLeftArrowIcon}
        // handleKeyDown={this.handleKeyDown}
        // searchRequested={this.props.searchRequested}
        // modalIsVisible={this.state.modalIsVisible}
        // handleClickSearchIcon={this.handleClickSearchIcon}
        // handleClickMarmoymLogo={this.handleClickMarmoymLogo}
        // handleClickPencilIcon={this.handleClickPencilIcon}
        // handleClickHamburgerIcon={this.handleClickHamburgerIcon}
        // handleClickBackdrop={this.handleClickBackdrop}/>
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => {    
  };
}

interface MastheadContainerProps extends ConnectedReduxProps, RouteComponentProps {

}

interface MastheadContainerStates {
  displayName: String,
  modalIsVisible: Boolean,
  query: String,
}

export default compose<any>(
  withRouter,
  connect(makeMapStateToProps),
)(MastheadContainer);

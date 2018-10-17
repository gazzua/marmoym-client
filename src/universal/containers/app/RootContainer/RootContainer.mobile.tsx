import { 
  BrowserRouter, 
  Route, 
  Switch, 
  withRouter,
} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import AppURL from '@universal/constants/AppURL';
import ErrorLayout from '@components/layouts/ErrorLayout/ErrorLayout.mobile';
import HomeLayout from '@components/layouts/HomeLayout/HomeLayout.mobile';
import { makeReselectCredential } from '@selectors/authSelector';
import Root from '@components/app/Root/Root.mobile';

class RootContainer extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      errorDidOccur: false,
    };
  }

  componentDidMount() {
  }

  componentDidCatch(err) {
    console.error(err);
    this.setState(() => ({
      errorDidOccur: true,
    }));
  }

  renderRoute() {
    if (this.state.errorDidOccur) {
      return <ErrorLayout/>;
    } else {
      return (
        <Route
          render={(props) => {
            return (
              <HomeLayout
                credential={this.props.credential}/>
            );
          }}/>
      );
    }
  }

  render() {
    return (
      <Root>
        {this.renderRoute()}
      </Root>
    );
  }
}

const makeMapStateToProps = () => {
  const selectCredential = makeReselectCredential();
  return (state, props) => {
    return {
      credential: selectCredential(state),
    };
  };
}

export default compose<any>(
  hot(module),
  withRouter,
  connect(makeMapStateToProps),
)(RootContainer);

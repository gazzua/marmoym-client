import { 
  BrowserRouter, 
  Route, 
  Switch, 
} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as React from 'react';

import AppURL from '@universal/constants/AppURL';
import ErrorLayout from '@components/layouts/ErrorLayout/ErrorLayout.mobile';
import HomeLayout from '@components/layouts/HomeLayout/HomeLayout.mobile';
import { makeReselectCredential } from '@selectors/authSelector';

class RootContainer extends React.Component {
  constructor() {
    super();
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
      // <BrowserRouter> 
      //   {this.renderRoute()}
      // </BrowserRouter>
      <div>
        {this.renderRoute()}
      </div>
    );
  }
}

RootContainer.propTypes = {
};

const makeMapStateToProps = () => {
  const selectCredential = makeReselectCredential();
  return (state, props) => {
    return {
      credential: selectCredential(state, props),
    };
  };
}

export default compose(
  connect(makeMapStateToProps),
)(RootContainer);

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Action from '@actions/Action';
import Root from '@src/components/app/Root/Root.mobile';
import globalStyle from '@src/styles/global';
import { getLocale } from '@actions/localeAction'

class RootContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getLocale({
      locale: 'ko',
    }));
  }

  render() {
    return (
      <Root>
        {this.props.children}
      </Root>
    );
  }
}

export default withRouter(connect()(RootContainer));

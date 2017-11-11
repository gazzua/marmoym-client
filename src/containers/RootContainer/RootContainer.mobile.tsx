import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Action from '@actions/Action';
import Root from '@src/components/app/Root/Root';
import { RootContainerProps } from '@src/models/ContainerTypes';
import globalStyle from '@src/styles/global';

class RootContainer extends React.Component<RootContainerProps, {}> {
  public componentDidMount() {
    this.props.dispatch(Action.GET_LOCALE({
      locale: 'ko',
    }));
  }

  public render() {
    return (
      <Root>
        {this.props.children}
      </Root>
    );
  }
}

export default withRouter(connect()(RootContainer));

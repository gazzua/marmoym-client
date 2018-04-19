import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { StyledFunction } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Action from '@actions/Action';
// tslint:disable-next-line:max-line-length
import DefinitionListContainer from '@src/containers/DefinitionListContainer/DefinitionListContainer.mobile';
import MastheadContainer from '@src/containers/MastheadContainer/MastheadContainer.mobile';
import DefineContainer from '@src/containers/DefineContainer/DefineContainer.mobile';
import SignInContaienr from '@src/containers/SignInContainer/SignInContainer.mobile';
import SignUpContainer from '@src/containers/SignUpContainer/SignUpContainer.mobile';
import UserContainer from '@src/containers/UserContainer/UserContainer.mobile';
import * as AppURL from '@src/models/AppURL';
import { getDefinitions, search } from '@actions/definitionActions'

const DefaultRoute = (_props) => {
  const { dispatch } = _props;

  const queryString = new URLSearchParams(_props.location.search);
  const query = queryString.get('q');

  return (
    <div>
      <MastheadContainer searchRequested={query}/>
      <Switch>
        <Route exact path={AppURL.ROOT}
          render={(props) => {
            dispatch(getDefinitions({
              page: 0,
            }));
            
            return <DefinitionListContainer/>;
          }}/>

        <Route exact path={AppURL.SEARCH}
          render={(props) => {
            dispatch(search({
              query,
            }));
            return <DefinitionListContainer/>;
          }}/>

        <Route path={AppURL.DEFINITIONS_ID}
          render={(props) => {
            dispatch(getDefinitions({
              page: 0,
              //defIds: props.match.params.defId,
            }));

            return <DefinitionListContainer/>;
          }}/>

        <Route path={AppURL.TERMS} exact component={DefinitionListContainer}/>
        <Route path="/term/:termLabel" component={DefinitionListContainer}/>
        <Route path="/term/:termLabel/defId/:defId" component={DefinitionListContainer}/>
        <Route path={AppURL.DEFINE} component={DefineContainer}/>
        <Route path={AppURL.SIGNIN} component={SignInContaienr}/>
        <Route path={AppURL.SIGNUP} component={SignUpContainer}/>

      </Switch>
    </div>
  );
};

export default withRouter(connect()(DefaultRoute));

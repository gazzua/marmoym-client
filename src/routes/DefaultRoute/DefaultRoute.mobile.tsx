import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { StyledFunction } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Action from '@actions/Action';
// tslint:disable-next-line:max-line-length
import DefinitionListContainer from '@src/containers/DefinitionListContainer/DefinitionListContainer';
import MastheadContainer from '@src/containers/MastheadContainer/MastheadContainer';
import DefineContainer from '@src/containers/DefineContainer/DefineContainer';
import SignInContaienr from '@src/containers/SignInContainer/SignInContainer';
import * as AppURL from '@src/models/AppURL';

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
            const { termLabel } = props.match.params;
            dispatch(Action.GET_DEFINITION_IDS({
              termLabel,
            }));
            
            return <DefinitionListContainer/>;
          }}/>

        <Route exact path={AppURL.SEARCH}
          render={(props) => {
            dispatch(Action.SEARCH({
              query,
            }));
            return <DefinitionListContainer/>;
          }}/>

        <Route exact path={AppURL.DEFINITIONS_ID}
          render={(props) => {
            return <div>1</div>;
          }}/>

        <Route path={AppURL.TERMS} exact component={DefinitionListContainer}/>
        <Route path="/term/:termLabel" component={DefinitionListContainer}/>
        <Route path="/term/:termLabel/defId/:defId" component={DefinitionListContainer}/>
        <Route path={AppURL.DEFINE} component={DefineContainer}/>
        <Route path={AppURL.SIGNIN} component={SignInContaienr}/>

      </Switch>
    </div>
  );
};

export default withRouter(connect()(DefaultRoute));

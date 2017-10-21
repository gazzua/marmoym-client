import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { StyledFunction } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';  

import { createAction, ActionTypes } from '@actions/index';
import DefinitionListContainer from '@src/containers/DefinitionListContainer/DefinitionListContainer';
import MastheadContainer from '@src/containers/MastheadContainer/MastheadContainer';
import DefineContainer from '@src/containers/DefineContainer/DefineContainer';

const DefaultRoute = (_props) => {
  const { dispatch } = _props;
  return (
    <div>
      <MastheadContainer/>
      <Switch>
        <Route path="/" exact render={(props) => {
          const { termLabel } = props.match.params;
          dispatch(createAction(ActionTypes.GET_DEFINITION_IDS, {
            termLabel
          }));

          return <DefinitionListContainer/>
        }}/>
        <Route path="/terms" exact component={DefinitionListContainer}/>
        <Route path="/term/:termLabel" component={DefinitionListContainer}/>
        <Route path="/term/:termLabel/defId/:defId" component={DefinitionListContainer}/>
        <Route path="/define" component={DefineContainer}/>
      </Switch>
    </div>
  );
};

export default withRouter(connect()(DefaultRoute));

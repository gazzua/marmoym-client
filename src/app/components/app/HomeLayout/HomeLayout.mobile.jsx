import { connect } from 'react-redux';
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { withRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import AppURL from '@src/models/AppURL';
import { border } from '@styles/styles';
import Color from '@constants/Color';
import DefinitionListContainer from '@src/containers/DefinitionListContainer/DefinitionListContainer.mobile';
import MastheadContainer from '@src/containers/MastheadContainer/MastheadContainer.mobile';
import DefineContainer from '@src/containers/DefineContainer/DefineContainer.mobile';
import SignInContaienr from '@src/containers/SignInContainer/SignInContainer.mobile';
import SignUpContainer from '@src/containers/SignUpContainer/SignUpContainer.mobile';
import UserContainer from '@src/containers/UserContainer/UserContainer.mobile';
import { getDefinitions, search } from '@actions/definitionActions';

const StyledHomeLayout = styled.div`
  ${border('black')}
`;

const Page = styled.div`
  ${border('red')}
`;

const HomeLayout = (props) => {
  return (
    <StyledHomeLayout>
      <MastheadContainer/>
      <Page>
        <Switch>
          <Route 
            path={AppURL.SEARCH}
            render={(props) => {
              return <DefinitionListContainer/>;
            }}/>

          <Route 
            path={AppURL.DEFINITIONS_ID}
            render={(props) => {
              return <DefinitionListContainer/>;
            }}/>

          <Route
            render={(props) => (
              <DefinitionListContainer/>
            )}/>

          {/* <Route path={AppURL.TERMS} exact component={DefinitionListContainer}/>
          <Route path="/term/:termLabel" component={DefinitionListContainer}/>
          <Route path="/term/:termLabel/defId/:defId" component={DefinitionListContainer}/>
          <Route path={AppURL.DEFINE} component={DefineContainer}/>
          <Route path={AppURL.SIGNIN} component={SignInContaienr}/>
          <Route path={AppURL.SIGNUP} component={SignUpContainer}/> */}

        </Switch>
      </Page>
    </StyledHomeLayout>
  );
};

export default withRouter(connect()(HomeLayout));

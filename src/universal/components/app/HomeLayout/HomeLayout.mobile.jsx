import { connect } from 'react-redux';
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { withRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import AppURL from '@universal//models/AppURL';
import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';
import CommentlistContainer from '@containers/CommentListContainer/CommentListContainer.mobile';
import DefinitionContainer from '@containers/DefinitionContainer/DefinitionContainer.mobile';
import DefinitionListContainer from '@containers/DefinitionListContainer/DefinitionListContainer.mobile';
import MastheadContainer from '@containers/MastheadContainer/MastheadContainer.mobile';
import DefineContainer from '@containers/DefineContainer/DefineContainer.mobile';
import SignInContaienr from '@containers/SignInContainer/SignInContainer.mobile';
import SignUpContainer from '@containers/SignUpContainer/SignUpContainer.mobile';
import UserContainer from '@containers/UserContainer/UserContainer.mobile';

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
            path={AppURL.DEFINE}
            render={(props) => {
              return <DefineContainer/>;
            }}/>

          <Route 
            path={AppURL.DEFINITIONS_DEFID}
            render={(props) => {
              return (
                <div>
                  <DefinitionContainer/>
                  <CommentlistContainer/>
                </div>
              );
            }}/>

          <Route
            path={AppURL.SIGNIN}
            component={SignInContaienr}/>

          <Route
            path={AppURL.SIGNUP}
            component={SignUpContainer}/>
                  
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

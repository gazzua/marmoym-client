import * as React from 'react';
import { 
  Route, 
  Switch,
  withRouter,
} from 'react-router-dom';
import { compose } from 'redux';
import styled from 'styled-components';

import AppURL from '@universal/constants/AppURL'
import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';
import CommentlistContainer from '@containers/app/CommentListContainer/CommentListContainer.mobile'
import DefineContainer from '@containers/app/DefineContainer/DefineContainer.mobile';
import DefinitionContainer from '@containers/app/DefinitionContainer/DefinitionContainer.mobile';
import DefinitionListContainer from '@containers/app/DefinitionListContainer/DefinitionListContainer.mobile';
import { MASTHEAD_HEIGHT } from '@components/Masthead/Masthead/Masthead.mobile';
import MastheadContainer from '@containers/Masthead/MastheadContainer/MastheadContainer.mobile'
import SignInContainer from '@containers/app/SignInContainer/SignInContainer.mobile';
import SignUpContaienr from '@containers/app/SignUpContainer/SignUpContainer.mobile'

const StyledHomeLayout = styled.div`
  background-color: ${Color.GRAY9};
  height: 100%;
`;

const Page = styled.div`
  padding-top: ${MASTHEAD_HEIGHT}px;
`;

const HomeLayout = ({
  credential,
}) => {
  return (
    <StyledHomeLayout>
      <MastheadContainer />
      <Page>
        <Switch>
          <Route
            component={DefinitionListContainer}
            exact
            path={AppURL._}
          />
          <Route
            component={DefineContainer}
            path={AppURL.DEFINE}
          />
          <Route 
            component={DefinitionContainer}
            path={AppURL.DEFINITIONS_DEFID}
          />
          <Route
            component={DefinitionListContainer}
            path={AppURL.SEARCH}
          />
          <Route
            component={SignInContainer}
            path={AppURL.SIGNIN}
          />
          <Route
            component={SignUpContaienr}
            path={AppURL.SIGNUP}
          />
          <Route
            render={(props) => {
              return <div>no route defined</div>
            }}
          />
        </Switch>
      </Page>
    </StyledHomeLayout>
  );
};

export default compose<any>(withRouter)(HomeLayout);

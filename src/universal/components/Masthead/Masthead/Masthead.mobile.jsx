import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';
import { 
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import AppURL from '@universal/constants/AppURL';
import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';
import DefaultMastheadContainer from '@containers/Masthead/DefaultMastheadContainer/DefaultMastheadContainer.mobile';
import DefineMastheadContainer from '@containers/Masthead/DefineMastheadContainer/DefineMastheadContainer.mobile';
export { MASTHEAD_HEIGHT } from '@components/Masthead/MastheadBase/MastheadBase.mobile';

const Masthead = ({
}) => {
  return (
    <Switch>
      <Route
        component={DefineMastheadContainer}
        path={AppURL.DEFINE}/>
      <Route
        component={DefaultMastheadContainer}/>
    </Switch>
  );
};

Masthead.propTypes = {};

export default withRouter(Masthead);

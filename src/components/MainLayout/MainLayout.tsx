import * as React from 'react';

const styles = require("./MainLayout.scss");
import MastheadContainer from '../../containers/MastheadContainer';
import AppContainer from '../../containers/AppContainer';
import PageContainer from '../../containers/PageContainer';

export default (props) => (
  <AppContainer
    masthead={MastheadContainer}
    page={PageContainer}/>
)
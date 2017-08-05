import * as React from 'react';

const styles = require("./MainLayout.scss");
import MastheadContainer from '../../containers/MastheadContainer/MastheadContainer';
import AppContainer from '../../containers/AppContainer/AppContainer';
import PageContainer from '../../containers/PageContainer/PageContainer';

export default (props) => (
  <AppContainer
    masthead={MastheadContainer}
    page={PageContainer}/>
)
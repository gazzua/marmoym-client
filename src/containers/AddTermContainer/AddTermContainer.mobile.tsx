import * as React from 'react';
import { withRouter } from 'react-router-dom'; 

import AddTerm from '../../components/AddTerm/AddTerm';

class MastheadContainer extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <AddTerm/>
    )
  }
}

export default withRouter(MastheadContainer);
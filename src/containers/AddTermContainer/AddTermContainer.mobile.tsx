import * as React from 'react';
import { withRouter } from 'react-router-dom'; 

const styles = require("./AddTermContainer.mobile.scss");
import AddTerm from '../../components/AddTerm/AddTerm';

// export namespace MastheadContainer {
//   export interface Props {
//     history: any;
//     handleClickAddTerm: any;
//   }
// }

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
import * as React from 'react';

const styles = require("./MastheadContainer.scss");
import Masthead from '../../components/Masthead/Masthead';

class MastheadContainer extends React.Component {
  render() {
    return (
      <Masthead
        someData={1}/>
    )
  }
}

export default MastheadContainer;
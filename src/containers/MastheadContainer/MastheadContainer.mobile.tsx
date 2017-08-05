import * as React from 'react';
import { withRouter } from 'react-router-dom'; 

const styles = require("./MastheadContainer.mobile.scss");
import Masthead from '../../components/Masthead/Masthead';

export namespace MastheadContainer {
  export interface Props {
    history: any;
    handleClickAddTerm: any;
    masthead: any;
    location: any;
  }
}

class MastheadContainer extends React.Component<MastheadContainer.Props> {
  constructor() {
    super()
    this.handleClickAddTerm = this.handleClickAddTerm.bind(this)
  }

  handleClickAddTerm() {
    this.props.history.push("/addTerm")
  }

  render() {
    return (
      <Masthead
        history={1}
        pathname={this.props.location.pathname}
        handleClickAddTerm={this.handleClickAddTerm}/>
    );
  }
}

export default withRouter(MastheadContainer);
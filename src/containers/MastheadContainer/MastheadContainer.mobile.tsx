import * as React from 'react';
import { withRouter } from 'react-router-dom'; 

const styles = require("./MastheadContainer.mobile.scss");
import Masthead from '../../components/Masthead';

export namespace MastheadContainer {
  export interface Props {
    history: any;
    handleClickAddTerm: any;
  }
}

class MastheadContainer extends React.Component<MastheadContainer.Props> {

  constructor() {
    super()
    this.handleClickAddTerm = this.handleClickAddTerm.bind(this)
  }

  handleClickAddTerm() {
    this.props.history.push("/power")
  }

  render() {
    return (
      <Masthead
        handleClickAddTerm={this.handleClickAddTerm}
        someData={1}/>
    )
  }
}

export default withRouter(MastheadContainer);
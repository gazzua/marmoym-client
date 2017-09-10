import * as React from 'react';
import { withRouter } from 'react-router-dom'; 

import AddTerm from '../../components/AddTerm/AddTerm';

namespace AppContainer {
  export interface Props {
    masthead?: typeof AddTermContainer,
    pageContent?: any,
  }

  export interface State {
    usages: any
  }
}
interface AppContainerProps {
  
}

class AddTermContainer extends React.Component<AppContainer.Props, AppContainer.State> {

  constructor() {
    super();
    this.state = {
      usages : [
        ''
      ]
    };
  }
  handleClickAddUsage() {
    let { usages }=this.state;
    usages.push('');
    this.setState({usages: usages});
  }
  render() {
    return (
      <AddTerm 
        usages={this.state.usages} 
        handleClickAddUsage={this.handleClickAddUsage.bind(this)}/>
    )
  }
}

export default withRouter(AddTermContainer);
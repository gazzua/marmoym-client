import * as React from 'react';
import { withRouter } from 'react-router-dom'; 

import Define from '@src/components/app/Define/Define';

namespace DefineContainer {
  export interface Props {
    pageContent?: any,
  }
  
  export interface State {
    usages: any
  }
}

interface DefineContainer {
  
}

class DefineContainer extends React.Component<DefineContainer.Props, DefineContainer.State> {
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
      <Define 
        usages={this.state.usages} 
        handleClickAddUsage={this.handleClickAddUsage.bind(this)}/>
    )
  }
}

export default withRouter(DefineContainer);
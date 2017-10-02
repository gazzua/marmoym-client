import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Define from '@src/components/app/Define/Define';

class DefineContainer extends React.Component<any, any> {
  public constructor() {
    super();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeUsage = this.handleChangeUsage.bind(this);
    this.state = {
      usages: [
        '',
      ],
    };
  }

  private handleChangeInput(e, i) {
    console.log(1)
    let { usages } = this.state;
    usages[i] = e.target.value;
    console.log(usages[i]);

    this.setState({
      usages: usages
    });
  }

  private handleChangeUsage(index, content) {
    let { usages } = this.state;
    usages[index] = content;
    this.setState({usages: usages});
  }

  private handleDeleteUsage(index) {
    let { usages } = this.state;
    usages.splice(index, 1);
    console.log(usages);
    this.setState({usages: usages});
  }

  private handleClickAddUsage() {
    let { usages } = this.state;
    usages.push('');
    this.setState({
      usages,
    });
  }

  public render() {
    return (
      <Define 
        usages={this.state.usages}
        handleChangeInput={this.handleChangeInput}
        handleChangeUsage={this.handleChangeUsage.bind(this)}
        handleDeleteUsage={this.handleDeleteUsage.bind(this)}
        handleClickAddUsage={this.handleClickAddUsage.bind(this)}/>
    );
  }
}

export default withRouter(connect()(DefineContainer));

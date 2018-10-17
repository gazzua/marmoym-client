import * as React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Define from '@universal/components/app/Define/Define.mobile';

class DefineContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      usages: [
        '',
      ],
    };
  }

  handleClickAddUsage() {
    const { usages } = this.state;
    usages.push('');
    this.setState({
      usages,
    });
  }

  render() {
    return (
      <Define
        usages={this.state.usages}
        handleClickAddUsage={this.handleClickAddUsage.bind(this)}/>
    );
  }
}

export default withRouter(connect()(DefineContainer));

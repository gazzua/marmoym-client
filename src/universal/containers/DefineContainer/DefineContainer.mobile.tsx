import * as React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Define from '@universal/components/app/Define/Define.mobile';

class DefineContainer extends React.Component<DefineContainerProps, DefineContainerStates> {
  constructor(props) {
    super(props);
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
      <div></div>
      // <Define
      //   usages={this.state.usages}
      //   handleClickAddUsage={this.handleClickAddUsage.bind(this)}
      //   handleChangeValue={null}
      //   id={null}/>
    );
  }
}

interface DefineContainerProps {

}

interface DefineContainerStates {
  usages: Array<String>,
}

export default withRouter(connect()(DefineContainer));

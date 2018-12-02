import { compose } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import Define from '@universal/components/app/Define/Define.mobile';
import { uuid } from '@utils/mathUtils';

export const DEFINE_FORM_ID = uuid('define');
export const DEFINE_FORM_VALUES = '__values';

class DefineContainer extends React.Component<DefineContainerProps> {
  form: any;

  constructor(props) {
    super(props);
    this.form = undefined;
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentDidMount() {
    this.form = document.getElementById(DEFINE_FORM_ID.toString());
    this.form[DEFINE_FORM_VALUES] = {};
  }

  handleChangeValue(e, id) {
    this.form[DEFINE_FORM_VALUES][id] = e.target.value;
  }

  render() {
    return (
      <Define
        handleChangeValue={this.handleChangeValue}
        id={DEFINE_FORM_ID}/>
    );
  }
}

const makeMapStateToProps = () => {
  return (state, props) => {
    return {
    };
  };
};

export default compose<any>(
  withRouter,
  connect(makeMapStateToProps),
)(DefineContainer);

interface DefineContainerProps {
}

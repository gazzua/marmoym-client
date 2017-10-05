import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import * as translateSelector from '@src/store/selectors/translateSelector';

const mapStateToProps = (state) => {
  return {
    trans: translateSelector.getTranslate(state)
  };
};

const T = connect(mapStateToProps)((props) => {
  // console.log("translate", props.label, props.trans);
  const label = _.get(props.trans, [props.label])

  return (
    <span className={props.className}>
      {label}
    </span>
  );
});

export default T;
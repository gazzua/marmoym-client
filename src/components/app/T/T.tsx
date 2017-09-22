import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { transSelector } from '@src/store/selectors';

const mapStateToProps = (state) => ({
  trans: transSelector(state)
});

const T = connect(mapStateToProps)((props) => {
  console.log("translate", props.label, props.trans);
  const label = _.get(props.trans, [props.label])

  return (
    <span className={props.className}>
      {label}
    </span>
  );
});

export default T;
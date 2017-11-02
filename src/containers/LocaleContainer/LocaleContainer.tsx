import * as React from 'react';
import { connect } from 'react-redux';
import styled, { StyledFunction } from 'styled-components';

import { selectLocale } from '@selectors/localeSelector';

const mapStateToProps = (state) => {
  return {
    locale: selectLocale(state),
  };
};

const LocaleContainer = connect(mapStateToProps)((props) => {
  // console.log("translate", props.label, props.trans);
  const label = props.locale[props.label];

  return (
    <span className={props.className}>
      {label}
    </span>
  );
});

export default LocaleContainer;

import * as React from 'react';
import styled from 'styled-components';

import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';

const Icon = ({
  key = null,
  className,
  label,
}) => {
  const _className = className ? ` ${className}` : '';

  return (
    <i
      area-hidden="true"
      className={`fa fa-${label}${_className}`}/>
  );
};

const Facon: any = ({
  repeat,
  label,
  className,
}) => {
  if (repeat) {
    return [...Array(repeat)].map((_, idx) => {
      return (
        <Icon
          className={className}
          label={label}
          key={idx}/>
      );
    });
  }
  return (
    <Icon
          className={className}
          label={label}/>
  );
}

export default Facon;

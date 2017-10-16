import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { Span, I } from '@src/styles/elems'; 

export default (props) => {
  const className = `${props.className} fa ${props.icon}`
  return (
    <I 
      className={className}
      aria-hidden='true'/>
  );
}
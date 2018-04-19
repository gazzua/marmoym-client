import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { Colors } from '@styles/index';
import FontAwesomeIcon from '../FontAwesomeIcon/FontAwesomeIcon.mobile';

const StyledSeparatorIcon = styled.span`
  display: inline-block;
  width: 1px;
  height: 11px;
  border-left: 1px solid ${Colors.BLACK4};
`;
const SeparatorIcon = (props) => <StyledSeparatorIcon {...props} />;

export default SeparatorIcon;

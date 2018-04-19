import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import Color from '@constants/Color';
import FontAwesomeIcon from '../FontAwesomeIcon/FontAwesomeIcon.mobile';

const StyledSeparatorIcon = styled.span`
  display: inline-block;
  width: 1px;
  height: 11px;
  border-left: 1px solid ${Color.BLACK4};
`;
const SeparatorIcon = (props) => <StyledSeparatorIcon {...props} />;

export default SeparatorIcon;

import { connect } from 'react-redux';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';

export const MASTHEAD_HEIGHT = 46;

const StyledMastheadBase = styled.div`
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${Color.GRAY5};
  color: ${Color.BLACK4};
  display: flex;
  height: ${MASTHEAD_HEIGHT}px;
  justify-content: space-between;
  padding: 0 7px;
  position: fixed;
  width: 100%;

  i {
    font-size: 20px;
  }
`;

const MastheadBase: React.SFC<MastheadBaseProps | any> = ({
  children,
  className,
}) => {
  return (
    <StyledMastheadBase
      className={className}
    >
      {children}
    </StyledMastheadBase>
  );
};

export default MastheadBase;

interface MastheadBaseProps {
  children: React.ReactNode[],
  className: string;
}

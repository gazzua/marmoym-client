import * as PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

const StyledRoot = styled.div``;

const Root = ({
  children,
  ...props
}) => {
  return (
    <StyledRoot>
      {children}
    </StyledRoot>
  );
};

export default Root;

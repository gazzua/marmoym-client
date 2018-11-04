import * as React from 'react';
import styled from 'styled-components';

import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';
import DefaultButton from '@components/common/DefaultButton/DefaultButton.mobile';
import Facon from '@components/common/Facon/Facon.mobile';
import MastheadBase from '@components/Masthead/MastheadBase/MastheadBase.mobile';

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 70px;
`;

const RightButtonGroup = styled(ButtonGroup)`
  justify-content: flex-end;
`;

const Button = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0 4px;
`;

const DefineMasthead = ({
  handleClickClose,
  handleClickPost,
}) => {
  return (
    <MastheadBase>
      <ButtonGroup>
        <Button onClick={handleClickClose}>
          <Facon label="close" />
        </Button>
      </ButtonGroup>
      <Title>Define</Title>
      <RightButtonGroup>
        <DefaultButton
          onClick={handleClickPost}>
          POST
        </DefaultButton>
      </RightButtonGroup>
    </MastheadBase>
  )
};

export default DefineMasthead;

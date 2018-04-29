import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import AppURL from '@src/models/AppURL';
import { border } from '@styles/styles';
import Color from '@constants/Color';
import StarIcon from '@src/components/icons/Star/Star.mobile';

const StyledUpper = styled.div`
  padding: 0 12px;
  border-bottom: 1px solid ${Color.GRAY4};
`;

const UpperTop = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
`;

const Meta = styled.div`
`;

const Author = styled.span`
`;

const Time = styled.span`
  margin-left: 5px;
`;

const UpperBottom = styled.div`
 padding: 3px 0px 4px;
`;

const StyledTerm = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${Color.BLACK4};
  overflow-wrap: break-word;
`;

const Term = (props) => {
  return (
    <StyledTerm>
      <a
        href={''}
        onClick={(e) => { props.handleClickTerm(e, getUrl(props.defId)); }}>
        {props.label}
      </a>
    </StyledTerm>
  );
};

const Roman = styled.span`
  margin-left: 3px;
  font-size: 12px;
  color: ${Color.BLACK6};`;

const StyledStarIcon = styled(StarIcon)``;
const Pos = styled.span``;
const BottomMiddle = styled.div``;
const BottomRight = styled.div``;

const Upper = (props) => {
  return (
    <StyledUpper>
      <UpperTop>
        <div>{'badges'}</div>
        <Meta>
          <Author>{props.user.get('username')}</Author>
          <Time>{'time'}</Time>
        </Meta>
      </UpperTop>
      <UpperBottom>
        <Term
          defId={props.defId}
          handleClickTerm={props.handleClickTerm}
          label={props.term.get('label')}/>
        <Roman>{props.term.get('roman')}</Roman>
      </UpperBottom>
    </StyledUpper>
  );
};

function getUrl(defId) {
  return AppURL.build(AppURL.DEFINITIONS_ID, defId);
}

export default Upper;

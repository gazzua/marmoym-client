import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/styleUtils';
import { styles, Colors } from '@styles/index';
import StarIcon from '@src/components/icons/Star/Star';
import * as AppURL from '@src/models/AppURL';

const StyledUpper = styled.div`
  padding: 0 12px;
  border-bottom: 1px solid ${Colors.GRAY4};
`;

const UpperTop = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
`;

const Meta = styled.div``;
const Author = styled.span``;
const Time = styled.span`
  margin-left: 5px;`;

const UpperBottom = styled.div`
 padding: 3px 0px 4px`;

const StyledTerm = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.BLACK4};
  overflow-wrap: break-word;
  `;
  
const Term = (props) => {
  return (
    <StyledTerm>
      <a
        href={''}
        onClick={(e) => {props.handleClickTerm(e, getUrl(props.defId))}}>
        {props.label}
      </a>
    </StyledTerm>
  );
}

const Roman = styled.span`
  margin-left: 3px;
  font-size: 12px;
  color: ${Colors.BLACK6};`;

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
          <Author>{props.User.get('username')}</Author>
          <Time>{'time'}</Time>
        </Meta>
      </UpperTop>
      <UpperBottom>
        <Term
          defId={props.defId}
          handleClickTerm={props.handleClickTerm}
          label={props.Term.get('label')}/>
        <Roman>{props.Term.get('roman')}</Roman>
      </UpperBottom>
    </StyledUpper>
  );
};

function getUrl(defId) {
  return AppURL.build(AppURL.DEFINITIONS_ID, defId);
}

export default Upper;
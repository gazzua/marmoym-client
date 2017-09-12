import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '../../../styles/utils';
import { border } from '../../../styles/debug';
import BadgeList from '../../BadgeList/BadgeList';
import * as DefinitionType from './DefinitionType';

const styles = resolveNames(['']);

const StyledTerm = styled.div`
`;

const Term = ({ term }) => (
  <StyledTerm>
    {term}
  </StyledTerm>
);

const StyledUpper = styled.div`
  ${border('black')}
`;

const Upper = (props) => {
  return (
    <StyledUpper>
      
      <BadgeList badges={props.badges}/>
      <Term term={props.term}/>
    </StyledUpper>
  );
};

const StyledLabel = styled.div`
`;

const Label = ({ label }) => (
  <StyledLabel>
    {label}
  </StyledLabel>
);

const StyledDefinition = styled.div`
  margin-top: 15px;
`;

const StyledUsage = styled.div`
`

const Usage = ({ usage }) => (
  <StyledUsage>
    {usage}
  </StyledUsage>
);

const StyledPos = styled.div`
`;

const Pos = ({ pos }) => (
  <StyledPos>
    {pos}
  </StyledPos>
);

const StyledMedia = styled.div`
`;

const Media = ({ media }) => (
  <StyledMedia>
    {media}
  </StyledMedia>
);

const Definition: React.SFC<DefinitionType.Props> = (props) => {
  return (
    <StyledDefinition>
      <Upper {...props}/>
      <Label label={props.label}/>
      <Usage usage={props.usage}/>
      <Pos pos={props.pos}/>
      <Media media={props.media}/>
    </StyledDefinition>
  );
};

export default Definition;
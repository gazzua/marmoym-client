import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

const StyledBadgeList = styled.div`
`;

const StyledBadge = styled.span`
`

const renderBadges = (badges: string[]) => {
  return badges.map((badge, i) => {
    return <Badge key={i} label={badge}/>;
  });
};

const Badge = ({ label }) => (
  <StyledBadge>
    {label}
  </StyledBadge>
);

const BadgeList = ({ badges }) => {
  const Badges = renderBadges(badges);
  return (
    <StyledBadgeList>
      {Badges}
    </StyledBadgeList>
  );
};

export default BadgeList;
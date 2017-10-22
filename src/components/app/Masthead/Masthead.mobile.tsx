import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { Colors, styles } from '@styles/index';
import { Masthead } from '@src/components/ComponentTypes'; 
import DefaultMasthead from './DefaultMasthead/DefaultMasthead';
import SearchMasthead from './SearchMasthead/SearchMasthead';

const Masthead = (props) => {
  const { displayName } = props;

  switch (displayName) {
    case '/':
      return <DefaultMasthead {...props}/>
    case 'SEARCH':
      return <SearchMasthead {...props}/>
    default: return <DefaultMasthead {...props}/>;
  }
};

export default Masthead;


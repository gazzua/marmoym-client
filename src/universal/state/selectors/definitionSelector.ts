import { createSelector } from 'reselect';

import { makeSelectNetworkData } from '@selectors/networkSelector';
import Network from '@universal/constants/Network';

export const makeReselectComments: Function = ({
  actionType,
  defaultValue = {},
}, props) => {
  return createSelector(
    [makeSelectNetworkData(actionType)],
    (networkData) => {
      return networkData ? networkData : defaultValue;
    },
  );
};

export const makeReselectDefinition: Function = ({
  actionType,
  defaultValue = {},
}, props) => {
  return createSelector(
    [makeSelectNetworkData(actionType)],
    (networkData) => {
      return networkData ? networkData : defaultValue;
    },
  );
};

export const makeReselectDefinitionList: Function = ({
  actionType,
  defaultValue = {},
}, props) => {
  return createSelector(
    [makeSelectNetworkData(actionType)],
    (networkData) => {
      return networkData ? networkData : defaultValue;
    },
  );
};

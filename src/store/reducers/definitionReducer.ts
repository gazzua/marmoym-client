import * as Immutable from 'immutable';

import ActionTypes from '@src/store/actions/ActionTypes';
import Definition from '@src/models/Definition';
import { DefinitionType } from './StoreStateTypes';

const terms = {
  1: {
    id: '1',
    label: '김민섭',
    termRoman: 'gimminseb',
    updatedAt: 9999999999999
  }
}

const definitions = {
  1: {
    id: 1,
    term: '실화니1',
    label: '실화니?의 뜻',
    pos: '명사',
    usage: '민수 차 산거 실화니?',
    media: 'link/to/image',
    origin: '아프리카 철구 방송',
    badges: ['hot', 'top'],
    updatedAt: 9999999999999
  },
  21: {
    id: 21,
    term: '실화니2',
    label: '실화니?의 뜻',
    pos: '명사',
    usage: '민수 차 산거 실화니?',
    media: 'link/to/image',
    origin: '아프리카 철구 방송',
    badges: ['hot', 'top'],
    updatedAt: 9999999999999
  }
};

const initialState = {
  terms: Immutable.fromJS(terms),
  definitions: Immutable.fromJS(definitions),
  fetchNeeded: Immutable.List<number>(),
  renderRequested: Immutable.List<number>(),
  inDisplay: Immutable.List<number>()
};

export default (state = initialState, action) => {
  let newDefinitions;
  switch (action.type) {
    case ActionTypes.GET_DEFINITION_IDS_SUCCESS:
      return getDefinitionIdsDidSucceed(state, action);
    case ActionTypes.GET_DEFINITIONS_SUCCESS:
      return getDefinitionsDidSucceed(state, action);
    case ActionTypes.ADD_DEFINITION: 
      return {
        ...state,
        termAdded: action.payload
      }
    case ActionTypes.ADD_DEFINITION_SUCCESS: 
      return {
        ...state,
        termAdded: action.payload
      }
    case ActionTypes.REMOVE_DEFINITION:
      return {
        ...state
      }
    default:
      return state;
  }
};

/**
 * ...
 */
function getDefinitionIdsDidSucceed(state, action) {
  const { defIds } = action.payload;
  const fetchNeeded: number[] = [];

  defIds.forEach(defId => {
    const Definition = state.definitions.get(defId.id.toString());
    if (Definition && Definition.get('updatedAt') >= defId.updatedAt) {
      return;
    }
    fetchNeeded.push(defId.id);
  });

  return {
    ...state,
    fetchNeeded: Immutable.List(fetchNeeded),
    renderRequested: Immutable.List(defIds)
  }
}

/**
 * ...
 */
function getDefinitionsDidSucceed(state, action) {
  const { terms, definitions } = action.payload;
  let newDefinitions = state.definitions;
  let newTerms = state.terms;
  
  definitions.map(definition => {
    newDefinitions = newDefinitions.set(
      definition.id.toString(), 
      Immutable.fromJS(definition));
  });

  terms.map(term => {
    if (!state.terms.get(term.id.toString())) {
      newTerms = newTerms.set(term.id.toString(), Immutable.fromJS(term));
    }
  });

  return {
    ...state,
    terms: newTerms,
    definitions: newDefinitions,
    fetchNeeded: Immutable.List(),
    renderRequested: Immutable.List(),
    inDisplay: state.renderRequested
  };
}
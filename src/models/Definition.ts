import * as Immutable from 'immutable';
import { DefinitionType } from './ModelTypes';

const DefinitionRecord = Immutable.Record({
  id: '0',
  label: 'label',
  term_id: 0,
  user_id: 0,
  username: 'username',
  poss: Immutable.List(),
  usages: Immutable.List(),
  origins: Immutable.List(),
  upvote: 0,
  downvote: 0,
  created_at: 0,
  updated_at: 0,

  /**
   * ...
   */
  $term: {},

  /**
   * ...
   */
  $user: {}
});

const Definition = (function() {
  function ofMany(definitions) {
    let newDefinitions = Immutable.Map();
    for (const id in definitions) {
      newDefinitions = newDefinitions.set(
        id.toString(), 
        of(definitions[id]));
    }
    return newDefinitions;
  }
  
  function of(definition) {
    return new DefinitionRecord({
      id: definition.id,
      label: definition.label,
      term_id: definition.term_id,
      user_id: definition.user_id,
      poss: Immutable.List(definition.poss),
      usages: Immutable.List(definition.usages),
      origins: Immutable.List(definition.origins),
      upvote: definition.upvote,
      downvote: definition.downvote,
      created_at: definition.created_at,
      updated_at: definition.updated_at
    })
  }

  function merge(definitions) {
    return {
      into: function(Definitions) {
        let newDefinitions = Definitions;
        definitions.map(definition => {
          newDefinitions = newDefinitions.set(
            definition.id.toString(), 
            Immutable.fromJS(definition));
        });
        return newDefinitions;
      }
    }
  }

  return {
    of,
    ofMany,
    merge
  }
})();

export default Definition;
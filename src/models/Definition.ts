import * as Immutable from 'immutable';
import { DefinitionType } from './ModelTypes';

const DefinitionRecord = Immutable.Record({
  id: '0',
  label: 'label',
  term_id: 0,
  user_id: 0,
  username: 'username',
  Poss: Immutable.List(),
  Usages: Immutable.List(),
  Origins: Immutable.List(),
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
    const { poss, usages, origins, ...rest } = definition;
    return new DefinitionRecord({
      ...rest,
      Poss: Immutable.List(poss),
      Usages: Immutable.List(usages),
      Origins: Immutable.List(origins),
    })
  }

  function hardMerge(definitions) {
    return {
      into: function(Definitions) {
        let newDefinitions = Definitions;
        definitions.map(definition => {
          newDefinitions = newDefinitions.set(
            definition.id.toString(), 
            of(definition));
        });
        return newDefinitions;
      }
    }
  }

  return {
    of,
    ofMany,
    hardMerge
  }
})();

export default Definition;
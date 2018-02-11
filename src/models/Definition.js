import * as Immutable from 'immutable';

const DefinitionRecord = Immutable.Record({
  created_at: 0,
  downvote: 0,
  id: 0,
  label: 'label',
  origins: Immutable.List(),
  poss: Immutable.List(),
  term_id: 0,
  updated_at: 0,
  upvote: 0,
  usages: Immutable.List(),
  user_id: 0,
  username: 'username',

  /**
   * ...
   */
  $term: {},

  /**
   * ...
   */
  $user: {},
});

const Definition = (() => {
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
      origins: Immutable.List(origins),
      poss: Immutable.List(poss),
      usages: Immutable.List(usages),
    });
  }

  function hardMerge(definitions) {
    return {
      into(Definitions) {
        let newDefinitions = Definitions;
        definitions.map((definition) => {
          newDefinitions = newDefinitions.set(
            definition.id.toString(),
            of(definition));
        });
        return newDefinitions;
      },
    };
  }

  return {
    hardMerge,
    of,
    ofMany,
  };
})();

export default Definition;

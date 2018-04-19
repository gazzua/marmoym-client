import * as Immutable from 'immutable';

const TermRecord = Immutable.Record({
  created_at: 0,
  id: 0,
  label: 'label',
  roman: 'roman',
  updated_at: 0,
});

const Term = (() => {
  function ofMany(terms) {
    let newTerms = Immutable.Map();
    for (const id in terms) {
      newTerms = newTerms.set(
        id.toString(),
        of(terms[id]));
    }
    return newTerms;
  }

  function of(term) {
    return new TermRecord({
      ...term,
    });
  }

  function hardMerge(terms) {
    return {
      into(Terms) {
        let newTerms = Terms;
        terms.map((term) => {
          newTerms = newTerms.set(
            term.id.toString(),
            of(term));
        });
        return newTerms;
      },
    };
  }

  return {
    hardMerge,
    of,
    ofMany,
  };
})();

export default Term;

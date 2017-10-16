import * as Immutable from 'immutable';
import { TermType } from './ModelTypes';

const TermRecord = Immutable.Record({
  id: '0',
  label: 'label',
  roman: 'roman',
  created_at: 0,
  updated_at: 0
});

const Term = (function() {
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
      id: term.id,
      label: term.label,
      roman: term.roman,
      created_at: term.created_at,
      updated_at: term.updated_at
    })
  }

  function softMerge(terms) {
    return {
      into: function(Terms) {
        let newTerms = Terms;
        terms.map(term => {
          newTerms = newTerms.set(
            term.id.toString(), 
            Immutable.fromJS(term));
        });
        return newTerms;
      }
    }
  }

  return {
    of,
    ofMany,
    softMerge
  }
})();

export default Term;
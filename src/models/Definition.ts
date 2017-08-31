import * as Immutable from 'immutable';

const DefinitionRecord = Immutable.Record({
  term: '',
  label: '',
  pos: '',
  usage: '',
  media: '',
  origin: ''
});

class Definition extends DefinitionRecord {
  term: string;
  label: string;
  pos: string;
  usage: string;
  media: string;
  origin: string;
}

export default Definition;
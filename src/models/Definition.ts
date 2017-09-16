import * as Immutable from 'immutable';

const DefinitionRecord = Immutable.Record({
  term: '',
  label: '',
  pos: '',
  usage: '',
  media: '',
  origin: '',
  badges: ''
});

interface DefinitionType {
  term?: string;
  label?: string;
  pos?: string;
  usage?: string;
  media?: string;
  origin?: string;
  badges?: string[];
};

class Definition extends DefinitionRecord {
  constructor(params?: DefinitionType) {
      params ? super(params) : super();
  }

  with(values: DefinitionType) {
      return this.merge(values) as this;
  }
}

export default Definition;
import * as Immutable from 'immutable';
import { DefinitionType } from './ModelTypes';

const DefinitionRecord = Immutable.Record({
  id: '',
  term: '',
  label: '',
  pos: '',
  usage: '',
  media: '',
  origin: '',
  badges: ''
});

class Definition extends DefinitionRecord {
  constructor(params?: DefinitionType) {
      params ? super(params) : super();
  }

  with(values: DefinitionType) {
      return this.merge(values) as this;
  }
}

export default Definition;
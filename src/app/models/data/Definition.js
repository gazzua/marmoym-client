import Record from '@models/Record';

export default class Definition extends Record({
  created_at: new Date(),
  definition_id: 0,
  definition_label: '',
  pos: '',
  term_id: 0,
  term_label: '',
  updated_at: new Date(),
}) {
  constructor(data) {
    super(data);
  }
  
  static ofMany(data) {
    return data && data.reduce && data.reduce((acc, d) => {
      if (d!==null) {
        acc.push(
          new Definition({
            created_at: d.created_at,
            definition_id: d.definition_id,
            definition_label: d.definition_label,
            pos: d.pos,
            term_id: d.term_id,
            term_label: d.term_label,
            updated_at: d.updated_at,
          })
        );
      }
      return acc;
    }, []);
  }
};

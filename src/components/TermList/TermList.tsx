import * as React from 'react';

const styles = require('./TermList.scss');
import Term from './Term/Term';

const renderTermList = (termList) => {
  return termList.map((term, i) => (
    <Term
      key={i}
      name={term.name}
      defList={term.defList}/>
  ))
}

const TermList = (props) => {
  return (
    <div className={styles.wrapper}>
      {renderTermList(props.termList)}
    </div>
  )
}

export default TermList;
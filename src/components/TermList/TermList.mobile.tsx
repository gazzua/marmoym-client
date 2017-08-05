import * as React from 'react';

const styles = require('./TermList.mobile.scss');
import Term from './Term/Term';

const renderTermList = (terms) => {
  if (!terms) {
    return null;
  }
  return terms.map((term, i) => {
    return <Term
      key={i}
      name={term.name}
      defList={term.defList}/>
  })
}

const TermList = (props) => {
  return (
    <div className={styles.wrapper}>
      {renderTermList(props.terms)}
    </div>
  )
}

export default TermList;
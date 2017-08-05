import * as React from 'react';

const styles = require('./TermList.mobile.scss');
import Term from './Term/';

const renderTermList = (terms) => {
  console.log(33, terms)
  if (!terms) {
    return null;
  }
  return terms.map((term, i) => {
    console.log(term)
    return <Term
      key={i}
      name={term.name}
      defList={term.defList}/>
  })
}

const TermList = (props) => {
  console.log(props.terms)
  return (
    <div className={styles.wrapper}>
      {renderTermList(props.terms)} 
    </div>
  )
}

export default TermList;
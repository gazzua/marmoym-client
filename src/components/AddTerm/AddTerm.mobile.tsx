import * as React from 'react';

const styles = require("./AddTerm.mobile.scss");

const AddTerm = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.term}>
        <p>말</p>
        <input type="text"/>
      </div>
      <div className={styles.def}>
        <div>
          <p>뜻</p>
          <input id=""></input>
        </div>
        <div>
          <p>용례</p>
          <input type="text"/>
        </div>
      </div>
    </div>
  )
}

export default AddTerm;
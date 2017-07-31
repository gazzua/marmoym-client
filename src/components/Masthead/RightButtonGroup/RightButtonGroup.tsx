import * as React from 'react';

const styles = require('./RightButtonGroup.scss');

const RightButtonGroup = (props) => {
  return (
    <div className={styles.wrapper}>
      <button>sch</button>
      <button>add</button>
      <button>ham</button>
    </div>
  )
}

export default RightButtonGroup;
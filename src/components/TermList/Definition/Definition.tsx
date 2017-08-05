import * as React from 'react';

const styles = require('./Definition.scss');

const Definition = (props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        {props.def}
      </div>
      <div>
        {props.usage}
      </div>
    </div>
  )
}

export default Definition;
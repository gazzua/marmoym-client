import * as React from 'react';

const styles = require('./Term.mobile.scss');
import DefinitionList from '../DefinitionList/DefinitionList';

export namespace Term {
  export interface Props {
    name: string,
    defList: any
  }
}

const Term: React.SFC<Term.Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
        <div className={styles.labelList}>
          label list
        </div>
        <div>
          author and date
        </div>
      </div>
      <div className={styles.name}>
        <span>{props.name}</span>
        <span>romanized</span>
      </div>
      <DefinitionList
        defList={props.defList}/>
      <div className={styles.bottomRow}>
        <div>
          up and down
        </div>
        <div>
          rightMenuGroup
        </div>
      </div>
    </div>
  )
}

export default Term;
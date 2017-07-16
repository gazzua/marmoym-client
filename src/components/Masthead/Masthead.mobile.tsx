import * as React from 'react';

const styles = require('./Masthead.mobile.scss');
import MarmoymLogo from '../MarmoymLogo/MarmoymLogo';
import QueryDisplay from './QueryDisplay/QueryDisplay';

export namespace Masthead {
  export interface Props {
    handleClickAddTerm: any;
    history: any;
    pathname: any;
  }
}

const MastheadBase = (props) => {
  return (
    <div className={styles.wrapper}>
      <MarmoymLogo/>
      <QueryDisplay/>
      <div>
        {props.children}
      </div>
      <div className={styles.rightButtonGroup}>
        <button>
          sch
        </button>
        <button onClick={props.handleClickAddTerm}>
          add
        </button>
        <button>
          ham
        </button>
      </div>
    </div>
  );
}

const MastheadOnAddTerm: React.SFC<Masthead.Props> = () => {
  return (
    <MastheadBase>
      add term
    </MastheadBase>
  )
}

const MastheadDefault: React.SFC<Masthead.Props> = (props) => {
  return (
    <MastheadBase/>
  )
}

const Masthead: React.SFC<Masthead.Props> = (props) => {
  let Component;
  switch(props.pathname) {
    case '/addTerm':
      Component = <MastheadOnAddTerm {...props}/>;
    break;
    default:
      Component = <MastheadBase {...props}/>;
  }
  return Component;
}

export default Masthead;


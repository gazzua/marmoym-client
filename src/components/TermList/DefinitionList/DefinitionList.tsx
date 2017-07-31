import * as React from 'react';

const styles = require('./DefinitionList.scss');
import Definition from '../Definition/Definition';

const renderDefinition = (definitions) => {
  return definitions.map((def, i) => 
    <Definition
      key={i}
      def={def.def}
      usage={def.usage}/>
  );
}

const DefinitionList = (props) => {
  return (
    <div className={styles.wrapper}>
      {renderDefinition(props.defList)}
    </div>
  )
}

export default DefinitionList;
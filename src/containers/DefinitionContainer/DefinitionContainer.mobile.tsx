import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane';
import { DefinitionListContainer } from '@src/models/ContainerTypes';
import { selectDefinition }  from '@src/store/selectors/definitionSelector';

class DefinitionContainer extends React.Component<DefinitionListContainer.Props> {
  componentDidMount() {
  }

  render() {
    return (
      <DefinitionPane
        defId={11}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(123, 1);
  return {
    definition: selectDefinition(state, props.defId)
  }
}

export default connect(mapStateToProps)(DefinitionContainer);
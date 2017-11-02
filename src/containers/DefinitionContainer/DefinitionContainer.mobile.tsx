import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane';
import { DefinitionListContainerProps } from '@src/models/ContainerTypes';
import { selectDefinition } from '@src/store/selectors/definitionSelector';

class DefinitionContainer extends React.Component<DefinitionListContainerProps> {
  public componentDidMount() {
    //
  }

  public render() {
    return (
      <DefinitionPane/>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    definition: selectDefinition(state, props.defId),
  };
};

export default connect(mapStateToProps)(DefinitionContainer);

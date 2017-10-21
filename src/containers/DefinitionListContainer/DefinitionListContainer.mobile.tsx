import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import { DefinitionListContainer } from '@src/containers/ContainerTypes';
import { 
  selectCombinedDefinitionsInDisplay,
  selectDefinitionsInDisplay
} from '@src/store/selectors/definitionSelector';
import { createAction, ActionTypes } from '@actions/index';

class DefinitionListContainer extends React.Component<DefinitionListContainer.Props> {
  constructor(...props) {
    super(...props);
  }

  componentDidMount() {
  }

  render() {
    console.log('DefinitionList render123123', this.props.definitions);
    return (
      <DefinitionList
        definitions={this.props.definitions}/>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    definitions: selectCombinedDefinitionsInDisplay(state)
  }
}

export default connect(mapStateToProps)(DefinitionListContainer);
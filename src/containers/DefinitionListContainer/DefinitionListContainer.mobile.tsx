import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import { DefinitionListContainer } from '@src/containers/ContainerTypes';
import { 
  selectCombinedDefinitionsInDisplay,
  selectDefinitionsInDisplay
} from '@src/store/selectors/definitionSelector';
import { action, ActionTypes } from '@actions/index';

class DefinitionListContainer extends React.Component<DefinitionListContainer.Props> {
  constructor(...props) {
    super(...props);
  }

  componentDidMount() {
    const { termLabel } = this.props.match.params;
    
    this.props.dispatch(action(ActionTypes.GET_DEFINITION_IDS, {
      termLabel
    }));
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
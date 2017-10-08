import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import { DefinitionListContainer } from '@src/containers/ContainerTypes';
import { selectDefIds } from '@src/store/selectors/definitionSelector'
import { action, ActionTypes } from '@actions/index';

class DefinitionListContainer extends React.Component<DefinitionListContainer.Props> {
  constructor(...props) {
    super(...props);
  }

  componentDidMount() {
    this.props.dispatch(action(ActionTypes.GET_DEFINITIONS));
  }

  render() {
    console.log('DefinitionList render', this.props.defIds);
    return (
      <DefinitionList
        defIds={this.props.defIds}/>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    defIds: selectDefIds(state)
  }
}

export default connect(mapStateToProps)(DefinitionListContainer);
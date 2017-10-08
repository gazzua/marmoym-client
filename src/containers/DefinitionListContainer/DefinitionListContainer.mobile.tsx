import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import { DefinitionListContainer } from '@src/containers/ContainerTypes';
import { selectDefIds } from '@src/store/selectors/definitionSelector'
import { createAction } from '@src/store/actions/actionUtils';
import ActionTypes from '@src/store/actions/ActionTypes';

class DefinitionListContainer extends React.Component<DefinitionListContainer.Props> {
  constructor(...props) {
    super(...props);
  }

  componentDidMount() {
    this.props.dispatch(createAction(ActionTypes.GET_DEFINITIONS));
  }

  render() {
    console.log('DefinitionList render', this.props.defIds);
    return (
      <DefinitionList
        defIds={this.props.defIds}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log(123, state);
  return {
    defIds: selectDefIds(state)
  }
}

export default connect(mapStateToProps)(DefinitionListContainer);
import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import { termActions } from '@src/actions'
import { DefinitionListContainer } from '@src/containers/ContainerTypes';
import { selectDefinitions } from '@src/store/selectors/definitionSelector'

class DefinitionListContainer extends React.Component<DefinitionListContainer.Props> {
  componentDidMount() {
    this.props.getTerms();  
  }

  render() {
    return (
      <DefinitionList
        definitions={this.props.definitions}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    definitions: selectDefinitions(state)
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    getTerms: () => {
      dispatch(termActions.requestGetTerms())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefinitionListContainer);
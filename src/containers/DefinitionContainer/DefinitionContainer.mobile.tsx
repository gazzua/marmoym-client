import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import Definition from '@src/components/app/Definition/Definition';
import { termActions } from '@src/actions'
import { DefinitionListContainer } from '@src/containers/ContainerTypes';
import { selectDefinition }  from '@src/store/selectors/definitionSelector';

class DefinitionContainer extends React.Component<DefinitionListContainer.Props> {
  componentDidMount() {
  }

  render() {
    return (
      <Definition
        term={'a'}
        label={'a'}
        usage={'a'}
        pos={'a'}
        media={'a'}
        origin={'a'}
        badges={['a']}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    definition: selectDefinition(state, props.defId)
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    getTerms: () => {
      dispatch(termActions.requestGetTerms())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefinitionContainer);
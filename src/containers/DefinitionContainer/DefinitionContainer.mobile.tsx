import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import Definition from '@src/components/app/Definition/Definition';
import * as definitionActions from '@src/actions/definitionActions';
import { DefinitionListContainer } from '@src/containers/ContainerTypes';
import { selectDefinition }  from '@src/store/selectors/definitionSelector';

class DefinitionContainer extends React.Component<DefinitionListContainer.Props> {
  componentDidMount() {
  }

  // shouldComponentUpdate(props) {
  //   // console.log(123, 2);
  //   // return true;
  // }

  render() {
    return (
      <Definition
        defId={11}
        handleClick={() => {this.props.dispatch(definitionActions.requestAddDefinition())}}
        />
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
import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList.mobile';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane.mobile';
import { selectDefinition } from '@selectors/definitionSelector';

class DefinitionContainer extends React.Component {
  componentDidMount() {
    //
  }

  render() {
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

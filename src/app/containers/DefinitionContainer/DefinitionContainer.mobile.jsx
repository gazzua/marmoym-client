import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import DefinitionType from '@models/data/Definition';
import DefinitionList from '@src/components/app/DefinitionList/DefinitionList.mobile';
import Definition from '@src/components/app/Definition/Definition.mobile';
import { selectDefinition } from '@selectors/definitionSelector';
import { requestGetDefinitionsById } from '@actions/definitionActions';

class DefinitionContainer extends React.Component {
  constructor(...props) {
    super(...props);
  }

  componentDidMount() {
    this.props.dispatch(requestGetDefinitionsById({
      defId: this.props.match.params.defId,
    }));
  }

  render() { 
    return (
      <Definition
        definition={this.props.definition}/>
    );
  }
}

DefinitionContainer.propTypes = {
  definition: PropTypes.arrayOf(PropTypes.instanceOf(DefinitionType)),
}

const mapStateToProps = (state, props) => {
  return {
    definition: state.definitionReducer.definition,
  };
};

export default withRouter(connect(mapStateToProps)(DefinitionContainer));

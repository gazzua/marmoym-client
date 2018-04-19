import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList.mobile';
//import { DefinitionListContainerProps } from '@src/models/ContainerTypes';
import {
  selectCombinedDefinitionsInDisplay,
  selectDefinitionsInDisplay,
} from '@selectors/definitionSelector';

class DefinitionListContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleClickTerm = this.handleClickTerm.bind(this);
  }

  componentDidMount() {
    //
  }

  handleClickTerm(e, url) {
    e.preventDefault();
    this.props.history.push(url);
  }

  render() {
    console.log(1232323, this.props.definitions);
    return (
      <DefinitionList
        definitions={this.props.definitions}
        handleClickTerm={this.handleClickTerm}/>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    definitions: state.definitionReducer.definitions,
  };
};

export default withRouter(connect(mapStateToProps)(DefinitionListContainer));

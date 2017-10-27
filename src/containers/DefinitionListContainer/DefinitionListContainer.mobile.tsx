import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import DefinitionList from '@src/components/app/DefinitionList/DefinitionList';
import { DefinitionListContainer } from '@src/models/ContainerTypes';
import { 
  selectCombinedDefinitionsInDisplay,
  selectDefinitionsInDisplay
} from '@src/store/selectors/definitionSelector';
import { createAction, ActionTypes } from '@actions/index';

class DefinitionListContainer extends React.Component<DefinitionListContainer.Props> {
  constructor(...props) {
    super(...props);
    this.handleClickTerm = this.handleClickTerm.bind(this);
  }

  componentDidMount() {
  }

  handleClickTerm(e, url) {
    e.preventDefault();
    this.props.history.push(url);
  }

  render() {
    return (
      <DefinitionList
        definitions={this.props.definitions}
        handleClickTerm={this.handleClickTerm}/>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    definitions: selectCombinedDefinitionsInDisplay(state)
  }
}

export default withRouter(connect(mapStateToProps)(DefinitionListContainer));
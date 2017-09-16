import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from 'components/DefinitionList/DefinitionList';
import { termActions } from 'actions'

export namespace DefinitionListContainer {
  export interface Props {
    definitions: any;
    getTerms: any;
  }
}

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
    definitions: state.termsReducer.definitions
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
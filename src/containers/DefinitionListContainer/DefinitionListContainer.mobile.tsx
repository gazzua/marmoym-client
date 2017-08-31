import * as React from 'react';
import { connect } from 'react-redux';

import DefinitionList from '../../components/common/DefinitionList/DefinitionList';
import { termActions } from '../../actions'

export namespace DefinitionListContainer {
  export interface Props {
    terms: any;
    getTerms: any;
  }
}

class DefinitionListContainer extends React.Component<DefinitionListContainer.Props> {
  componentDidMount() {
    this.props.getTerms();  
  }

  render() {
    console.log("render definitionList container", this.props.terms)
    return (
      <DefinitionList
        definitions={this.props.terms}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    terms: state.termsReducer.terms
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
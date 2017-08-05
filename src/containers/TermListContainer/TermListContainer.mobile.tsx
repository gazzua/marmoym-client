import * as React from 'react';
import { connect } from 'react-redux';

import TermList from '../../components/TermList';
import { termActions } from '../../actions'

export namespace TermListContainer {
  export interface Props {
    terms: any;
    addTerm: any;
  }
}

class TermListContainer extends React.Component<TermListContainer.Props> {

  componentDidMount() {
    // this.props.addTerm();  
  }

  render() {
    console.log("re render termlist container", this.props.terms)
    return (
      <TermList
        terms={this.props.terms}/>
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
    addTerm: id => {
      dispatch(termActions.requestGetTerms())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermListContainer);
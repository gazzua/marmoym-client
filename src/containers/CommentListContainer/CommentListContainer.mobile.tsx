import * as React from 'react';
import { connect } from 'react-redux';

import { termActions } from '@src/actions'
import { selectComments } from '@src/store/selectors/commentSelector';
import CommentList from '@src/components/app/CommentList/CommentList';

class CommentListContainer extends React.Component {
  componentDidMount() {
    // todo: get comment
  }

  render() {
    return (
      <CommentList
        comments={''}/>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    comments: selectComments(state)
  }
}

const mapDispatchToProps = dispatch => {
  return  {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);
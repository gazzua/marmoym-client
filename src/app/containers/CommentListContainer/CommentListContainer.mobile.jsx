import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { selectComments } from '@selectors/commentSelector';
import CommentList from '@src/components/app/CommentList/CommentList.mobile';
import withUuid from '@hocs/withUuid';
import { requestGetComments } from '@actions/commentActions';

class CommentListContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      dummy: {
        1: {
          children: [8, 3],
          depth: 1,
          label: '와지립니다',
          vote: 3,
          created_at: 20170801
        },
        8: {
          children: [],
          depth: 2,
          label: '강츄!!!',
          vote: 3,
          created_at: 20170901
        },
        3: {
          children: [4],
          depth: 2,
          label: '오오오 좋은정보 감사영',
          vote: 3,
          created_at: 20171001
        },
        5: {
          children: [2],
          depth: 1,
          label: '앙 기무뛰~~',
          vote: 3,
          created_at: 20171001
        },
        4: {
          children: [],
          depth: 3,
          label: 'ㅣ띠뚜뛰뚜뛰~',
          vote: 3,
          created_at: 20171001
        },
        2: {
          children: [],
          depth: 2,
          label: 'Hey, Guys~',
          vote: 3,
          created_at: 20171101
        },
      },
    }
  }

  componentDidMount() {
    this.props.dispatch(requestGetComments({
      defId: this.props.match.params.defId,
    }));
  }

  render() {
    return (
      <div>
        <CommentList
          comments={this.state.dummy}/>
          {/* comments={this.props.comments} */}
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    comments: selectComments(state),
  };
};

export default withUuid(withRouter(connect(mapStateToProps)(CommentListContainer)));

import { compose } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";

import ActionType from '@universal/constants/ActionType';
import { ConnectedReduxProps } from '@universal/state/configureStore';
import DefinitionList from '@universal/components/app/DefinitionList/DefinitionList.mobile';
import { requestDownVoteDefinition, requestGetDefinitions, requestUpVoteDefinition } from '@actions/definitionActions';
import { makeReselectDefinitionList } from '@selectors/definitionSelector';
import withUuid from '@hocs/withUuid';

class DefinitionListContainer extends React.Component<DefinitionListContainerProps> {
  constructor(props) {
    super(props);
    this.handleClickDefinition = this.handleClickDefinition.bind(this);
    this.handleClickDownvote = this.handleClickDownvote.bind(this);
    this.handleClickUpvote = this.handleClickUpvote.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(requestGetDefinitions({
      componentId: this.props.componentId,
      page: 0,
    }));
  }

  handleClickDefinition(e, definitionId) {
    e.stopPropagation();
    this.props.history.push(`/definitions/${definitionId}`);
  }

  handleClickDownvote(e, targetId, userId) {
    this.props.dispatch(requestDownVoteDefinition({
      componentId: this.props.componentId,
      targetType: 'D',
      targetId: targetId,
      userId: userId,
    })).then((res) => {
    });;
  }

  handleClickUpvote(e, targetId, userId) {
    this.props.dispatch(requestUpVoteDefinition({
      componentId: this.props.componentId,
      targetType: 'D',
      targetId: targetId,
      userId: userId,
    }));
  }

  render() {
    return (
      <DefinitionList
        definitions={this.props.definitions}
        downVoted={this.props.downVoted}
        handleClickDefinition={this.handleClickDefinition}
        handleClickDownvote={this.handleClickDownvote}
        handleClickUpvote={this.handleClickUpvote}
        upVoted={this.props.upVoted}/>
    );
  }
}

const makeMapStateToProps = () => {
  const selectDefinitionList: Function = makeReselectDefinitionList({
    actionType: ActionType.REQUEST_GET_DEFINITIONS,
    defaultValue: [],
  });

const selectDownVote: Function = makeReselectDefinitionList({
  actionType: ActionType.REQUEST_DOWNVOTE_DEFINITIONS,
  defaultValue: [],
});

const selectUpVote: Function = makeReselectDefinitionList({
  actionType: ActionType.REQUEST_UPVOTE_DEFINITIONS,
  defaultValue: [],
});

  return (state, props) => {
    return {
      definitions: selectDefinitionList(state, props),
      downVoted: selectDownVote(state, props),
      upVoted: selectUpVote(state, props),
    };
  };
};

interface DefinitionListContainerProps extends ConnectedReduxProps, RouteComponentProps {
  componentId: any,
  definitions: Array<any>,
  downVoted: Array<any>,
  upVoted: Array<any>,
}

export default compose<any>(
  withUuid,
  withRouter,
  connect(makeMapStateToProps),
)(DefinitionListContainer);

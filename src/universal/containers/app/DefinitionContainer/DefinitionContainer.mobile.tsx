import { compose } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";

import ActionType from '@universal/constants/ActionType';
import { ConnectedReduxProps } from '@universal/state/configureStore';
import CommentListContainer from '@containers/app/CommentListContainer/CommentListContainer.mobile';
import Definition from '@universal/components/app/Definition/Definition.mobile';
import { makeReselectDefinition } from '@selectors/definitionSelector';
import { requestDownVoteDefinition, requestGetDefinitionsById, requestUpVoteDefinition } from '@actions/definitionActions';
import withUuid from '@hocs/withUuid';

class DefinitionContainer extends React.Component<DefinitionContainerProps> {
  constructor(props) {
    super(props);
    this.handleClickDefinition = this.handleClickDefinition.bind(this);
    this.handleClickDownvote = this.handleClickDownvote.bind(this);
    this.handleClickUpvote = this.handleClickUpvote.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(requestGetDefinitionsById({
      defId: this.props.match.params.defId,
      componentId: this.props.componentId,
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
    }));
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
    if (this.props.definition === null) return null;

    return (
      <div>
        <Definition 
          downVoted={0}
          upVoted={0}
          definition={this.props.definition}
          handleClickDefinition={this.handleClickDefinition}
          handleClickDownvote={this.handleClickDownvote}
          handleClickUpvote={this.handleClickUpvote}/>
        <CommentListContainer/>
      </div>
    );
  }
}

const makeMapStateToProps = (state, props) => {
  const selectDefinition: Function = makeReselectDefinition({
    actionType: ActionType.REQUEST_GET_DEFINITIONS_BY_ID,
    defaultValue: null,
  });

  return (state, props) => {
    return {
      definition: selectDefinition(state, props),
    };
  };
};

interface DefinitionContainerProps extends ConnectedReduxProps, RouteComponentProps {
  componentId: any,
  match: any,
  definition: Array<any>,
  downVoted: Array<any>,
  upVoted: Array<any>,
}

export default compose<any>(
  withUuid,
  withRouter,
  connect(makeMapStateToProps),
)(DefinitionContainer);

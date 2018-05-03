import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

const Label = styled.div``;
const Usage = styled.div``;
const Pos = styled.div``;
const Media = styled.div``;

const StyledComment = styled.div`
  margin-top: 15px;
`;

const Comment = ({
  comments,
}) => {
  return iterCommentObj(comments, getGrandParents(comments), []).map((comment, idx) => {
    return (
      <StyledComment>
        <div 
          key={idx} 
          data={comment}
          style={{marginLeft: 20 * (comment.depth - 1)}}
          > {comment.label}, depth: {comment.depth} </div>
        </StyledComment>
    )
  })
}

const iterCommentObj = ((comments, childrens, res) => {

  var sortedChildrens = childrens.sort(compareByCreatedTime)
  
  sortedChildrens.forEach((children) => {
    res.push({
      label: comments[children].label,
      depth: comments[children].depth,
    })
    if (comments[children].children.length === 0) {
    // when it has no child
    }
    else {
      iterCommentObj(comments, comments[children].children, res)
    }
  })
  return res;
});

const getGrandParents = ((comments) => {
  const res = []
  Object.entries(comments).forEach(([key, value]) => {
    if (value.depth === 1) {
      res.push(key);
    }
  })
  return res;
});

const compareByCreatedTime = (a, b)  => {
  return a.created_at <= b.created_at;
};

export default Comment;

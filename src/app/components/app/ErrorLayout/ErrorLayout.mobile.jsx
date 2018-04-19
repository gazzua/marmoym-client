import * as React from 'react';
import { withRouter } from 'react-router-dom';

const ErrorLayout = (props) => {
  return (
    <div onClick={() => { props.history.push('/'); }}>
      error did occur
    </div>
  );
};

export default withRouter(ErrorLayout);

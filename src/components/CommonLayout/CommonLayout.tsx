import * as React from 'react';

const style = require('./CommonLayout.scss')

class CommonLayout extends React.Component<{}, {}> {

  render() {
    return (
      <div className={style.wrapper}>
        {this.props.children}123
      </div>
    )
  }
}

export default CommonLayout;
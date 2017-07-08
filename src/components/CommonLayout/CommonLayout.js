import React from 'react';
import style from './CommonLayout.scss'

class CommonLayout extends React.Component {

  render() {
    return (
      <div className={style.wrapper}>
        {this.props.children}1
      </div>
    )
  }
}

export default CommonLayout;
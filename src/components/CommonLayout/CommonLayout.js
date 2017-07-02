import React from 'react';
import style from './CommonLayout.scss'

class CommonLayout extends React.Component {
  render() {
    console.log(1, style)
    return <div className={style.blue}>HiH113</div>
  }
}

export default CommonLayout;
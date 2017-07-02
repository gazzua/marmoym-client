import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import routes from './routes';
import Temp from './components/Temp'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  )
}

render(Temp)

// ReactDOM.render(
//   routes, 
//   document.getElementById("main"));

if (module.hot) {
  console.log(22)
  module.hot.accept('./components/Temp.js', () => { 
    render(Temp) 
  })
}
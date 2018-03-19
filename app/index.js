import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Start from './containers/Start';
//import { configureStore, history } from './store/configureStore';
import './app.global.css';

console.log('-->In index.js render');

render(
  <AppContainer>
    <Start/>
  </AppContainer>,
  document.getElementById('start')
);

if (module.hot) {
  console.log('-->In index.js module.hot');

  module.hot.accept('./containers/Start', () => {
    const NextRoot = require('./containers/Start'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot/>
      </AppContainer>,
      document.getElementById('start')
    );
  });
}
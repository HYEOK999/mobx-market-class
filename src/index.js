import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import RootStore from './stores';
// import MarketStore from './stores/market';
// import CounterStore from './stores/counter';

// const counter = new CounterStore();
// const market = new MarketStore();

const root = new RootStore(); // *** 루트 스토어 생성

ReactDOM.render(
  // <Provider counter={counter} market={market}>
  <Provider {...root}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

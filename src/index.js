import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

function reducer(state = 0, action) {
  if(action.type === 'AUMENTAR') {
    return state + 1;
  }
  else if(action.type === 'REDUZIR') {
    return state - 1;
  }
  else {
    return state;
  }
}

function reducer2(state = 'ADIVINHE OS CLÃ DOS PERSONAGENS', action) {
  if(action.type === 'KIMIMARO') {
    return state = 'CLÃ-KAGUYA';
  }
  else if(action.type === 'TSUNADE') {
    return state = 'CLÃ-SENJU/UZUMAKI';
  } 
  else if(action.type === 'JIRAYA') {
    return state = 'CLÃ-HATAKE';
  }
  else if(action.type === 'SAKURA') {
    return state = 'CLÃ-HARUNO/UCHIRA';
  }
  else if(action.type === 'HINATA') {
    return state = 'CLÃ-HYUGA/UZUMAKI';
  }
  else {
    return state;
  }
}

const reducers = combineReducers( {reducer, reducer2} );
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


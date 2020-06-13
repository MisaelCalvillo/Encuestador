import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { BrowserRouter } from 'react-router-dom';

const initialState = {
  user: {
    email: '',
    password: ''
  }
}

function reducer(state = initialState, action) {
  switch(action.type){
    case 'SHOW_USER':
      return {
        user : {
          email: action.email,
          password: action.password
        }
      }
    default:
      return state;
  }
}

const store = createStore(reducer)

// store.dispatch({type: 'SHOW_USER'})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { BrowserRouter } from 'react-router-dom';
import uuid from 'react-uuid'

const encuesta = [
  {
    id: uuid(),
    pregunta: 'Usted Conoce al candidato xxx?',
    opciones: [
      { opcion: 'si', selected: false },
      { opcion: 'no', selected: false },
      { opcion: 'quiza', selected: false },
      { opcion: 'tal ves', selected: false }
    ],
    isActive: false
  },
  {
    id: uuid(),
    pregunta: 'a quien elegirias?',
    opciones: [
      { opcion: 'tony stark', selected: false },
      { opcion: 'Arya stark', selected: false },
      { opcion: 'Hulk', selected: false },
      { opcion: 'deadpool', selected: false }
    ],
    isActive: false
  },
  {
    id: uuid(),
    pregunta: 'cuantas chelas te tomas?',
    opciones: [
      { opcion: 1 },
      { opcion: '2 o 3' },
      { opcion:' 4 o 6' },
      { opcion: '7 o más' }
    ],
    isActive: false
  }
]

const initialState = {
  user: {
    email: '',
    password: ''
  },
  respuestas: {

  },
  encuesta: encuesta
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

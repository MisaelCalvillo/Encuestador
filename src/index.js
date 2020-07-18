import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { BrowserRouter } from 'react-router-dom';

const encuesta = [
  {
    pregunta: "1. Cuál es la capital de Irán?",
    respuestas: {
      a: "Bagdad",
      b: "Teherán",
      c: "Islamabad"
    }
  },
  {
    pregunta: "2. Cuál es la capital de Irak?",
    respuestas: {
      a: "Kuwait",
      b: "Dubai",
      c: "Bagdad"
    }
  },
  {
    pregunta: "3. Cuál es la capital de Noruega?",
    respuestas: {
      a: "Roma",
      b: "Copenague",
      c: "Estocolmo",
      d: "Oslo"
    }
  },
  {
    pregunta: "4. Cuál es la capital de Serbia?",
    respuestas: {
      a: "Belgrado",
      b: "Zagreb",
      c: "Kabul"
    }
  },
  {
      pregunta: "5. Cuál es la capital de Australia?",
      respuestas: {
          a: "Sidney",
          b: "Zurich",
          c: "Canberra"
    }
  },
  {
    pregunta: "6. Cuál es la capital de Canadá?",
    respuestas: {
      a: "Toronto",
      b: "Montreal",
      c: "Ontario"
    }
  },
  {
    pregunta: "7. Cuál es la capital de Vietnam?",
    respuestas: {
      a: "Puket",
      b: "Ho Chin Ming",
      c: "Pan Lao Kung"
    }
  },
  {
    pregunta: "8. Cuál es la capital de China?",
    respuestas: {
      a: "Shangai",
      b: "Pekín",
      c: "Seul"
    }
  },
  {
    pregunta: "9. Cuál es la capital de Pakistan?",
    respuestas: {
      a: "Islamabad",
      b: "Kuwait",
      c: "Kabul"
    }
  },
  {
    pregunta: "10. Cuál es la capital de Marruecos?",
    respuestas: {
      a: "Casablanca",
      b: "Rabat",
      c: "Kabul"
    }
  }
];

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
      <StylesProvider injectFirst>
        <App/>
      </StylesProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

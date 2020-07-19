import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Map as map, Iterable } from 'immutable';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import './index.css';

import { state } from './services';
import App from './App';

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

const stateTransformer = statum => {
  if (Iterable.isIterable(statum)) return statum.toJS();
  return statum;
};

const logger = createLogger({
  stateTransformer,
  collapsed: () => true,
  colors: {
    title: () => '#ffa500',
    prevState: () => '#999999',
    action: () => '#4CDD50',
    nextState: () => '#0FAFF4',
    error: () => '#FF0000'
  },
  diff: true
});

let store;

window.on_development = process.env.NODE_ENV !== 'production';
if (window.on_development) {
  store = createStore(
    state.reducers,
    map(),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
} else {
  store = createStore(state.reducers.root, map(), composeWithDevTools(applyMiddleware(thunk)));
}

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

import React from 'react';
import './App.css';
import Encuesta from './Components/Encuesta';
import Inicio from './Components/Inicio';
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/encuesta"
          render={ routeProps => (
            <Encuesta {...routeProps}/>
          )}
        />
        <Route
          exact
          path="/"
          render={ routeProps => (
            <Inicio {...routeProps}/>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

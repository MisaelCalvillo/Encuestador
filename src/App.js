import React from 'react';
import './App.css';
import Encuesta from './Components/Encuesta';
import ShowSurveys from './Components/ShowSurveys'
import AddressConfirmation from './Components/AddressConfirmation'
import Address from './Components/Address'
import {Route, Switch} from "react-router-dom";

import { Authentication, Home } from './scenes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/address"
          render={ routeProps => (
            <Address {...routeProps}/>
          )}
        />
        <Route
          exact
          path="/addressConfirmation"
          render={ routeProps => (
            <AddressConfirmation {...routeProps}/>
          )}
        />
        <Route
          exact
          path="/showSurveys"
          render={ routeProps => (
            <ShowSurveys {...routeProps}/>
          )}
        />
        <Route
          exact
          path="/survey"
          render={ routeProps => (
            <Encuesta {...routeProps}/>
          )}
        />
        {/* <Route
          exact
          path="/surveys"
          component={}
        /> */}
        <Route 
          exact
          path="/home"
          component={Home}
        />
        <Route
          exact
          path="/"
          component={Authentication}
        />
      </Switch>
    </div>
  );
}

export default App;

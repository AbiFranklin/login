import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import EmailLogIn from './Component/EmailLogIn';
import Login from './Component/Login';
import Error from './Component/Error';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
            <EmailLogIn />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

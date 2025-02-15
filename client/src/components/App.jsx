import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Login from './Login.jsx';
import NavBar from './NavBar.jsx';


function App() {
   return (
       <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/:user'>
              <NavBar />
            </Route>
            <Route>
              <div>404 page not available</div>
            </Route>
          </Switch>
       </BrowserRouter>
   )
};

export default App;
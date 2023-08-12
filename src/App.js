import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeTrees from './pages/HomeTrees';
import HomeFish from './pages/HomeFish';


function App() {

  return (
    <Router>
      <Switch>
      <Route path='/home'>
              <Home />
        </Route>
        <Route path='/trees'>
              <HomeTrees />
        </Route>
        <Route path='/fish'>
              <HomeFish />
        </Route>
        <Route path='/animals'>
              <HomeFish />
        </Route>
        <Route path='/birds'>
              <HomeFish />
        </Route>
      </Switch>
    </Router>
  ); 
   
}

export default App;

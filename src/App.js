import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner'
import Menu from './components/Menu'
import treeData from './components/treeData'
import HomeTrees from './pages/HomeTrees';


function App() {

  return (
    <Router>
      <Switch>
        <Route path='trees'>
              <HomeTrees />
        </Route>
        <Route path='fish'>
              <HomeFish />
        </Route>
      </Switch>
    </Router>
  ); 
   
}

export default App;

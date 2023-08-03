import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner'
import Menu from './components/Menu'
import Home from './pages/Home'
import treeData from './components/treeData'


function App() {

  return (
    <>
    <Banner />
    <Menu />
    <Home treesData={treeData}/>
    </>
  );
}

export default App;

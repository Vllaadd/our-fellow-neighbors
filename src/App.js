import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner'
import Menu from './components/Menu'
import Home from './pages/Home'


function App() {

  const treesData = 
  { lat: 40.123, lng: -73.456, type: 'Japanese Zelkova' }

  return (
    <>
    <Banner />
    <Menu />
    <Home treesData={treesData}/>
    </>
  );
}

export default App;

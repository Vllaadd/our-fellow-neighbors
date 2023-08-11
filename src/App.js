import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner'
import Menu from './components/Menu'
import treeData from './components/treeData'
import HomeTrees from './pages/HomeTrees';


function App() {

  return (
    <>
    <Banner />
    <Menu />
    <HomeTrees treesData={treeData}/>
    </>
  );
}

export default App;

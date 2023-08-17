import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import treeData from './components/treeData';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Home from './pages/Home';
import HomeTrees from './pages/HomeTrees';
import HomeFish from './pages/HomeFish';
import fishData from './components/fishData';

function App() {
  return (
    <Router>
      <Banner />
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/trees" element={<HomeTrees trees={treeData}/>} />
        <Route path="/fish" element={<HomeFish fish={fishData}/>} />
      </Routes>
    </Router>
  );
}

export default App;

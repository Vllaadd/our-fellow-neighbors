import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Home from './pages/Home';
import HomeTrees from './pages/HomeTrees';
import HomeFish from './pages/HomeFish';

function App() {
  return (
    <Router>
      <Banner />
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/trees" element={<HomeTrees />} />
        <Route path="/fish" element={<HomeFish />} />
      </Routes>
    </Router>
  );
}

export default App;

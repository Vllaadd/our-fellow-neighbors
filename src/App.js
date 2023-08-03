import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import Menu from './components/Menu'
import Home from './pages/Home'
import Map from './pages/Map';


function App() {
  return (
    <>
    <Banner />
    <Menu />
    <Home />
    <Map />
    </>
  );
}

export default App;

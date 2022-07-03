import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Nav from './components/Nav';
import View from './components/View';
import About from './components/About';
import Search from "./components/Search";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Nav/>
  
  <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/Add' element={<Add/>}/>
        <Route  exact path='/:movie_id' element={<View/>}/> 
        <Route  path='/About' element={<About/>}/> 
        <Route  path='/Search' element={<Search/>}/> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;

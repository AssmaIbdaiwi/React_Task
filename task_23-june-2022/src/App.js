import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
<Nav />
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

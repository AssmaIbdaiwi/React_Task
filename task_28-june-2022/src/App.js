
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Nav from './components/Nav';
import { BrowserRouter as Router,Route, Routes }
    from 'react-router-dom';
function App() {
  return (
    <div className="App">
  <Nav />
  <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/Add' element={<Add/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

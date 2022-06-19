import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Registration from './components/Registration'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/Home" element={<Home />}/>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/Registration" element={<Registration />}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
const PORT = process.env.PORT || 5000;
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
   
    <>
    <NoteState>
<Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route  path="/" element={<Home showAlert={showAlert} />}/>
          <Route  path="/about" element={ <About showAlert={showAlert} />}/>
          <Route  path="/login" element={<Login showAlert={showAlert} />}/>
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />}/>
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;

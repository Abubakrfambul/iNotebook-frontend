import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { NoteState } from './context/notes/NoteState';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { AlertState } from './context/alerts/AlertState';

function App() {
  return (
    <div className="App">
      <NoteState>
        <AlertState>
      <BrowserRouter>
      <Navbar />
      <div className='container pt-5'>
      
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
      </div>
      </BrowserRouter>
      </AlertState>
     </NoteState>
    </div>
  );
}

export default App;

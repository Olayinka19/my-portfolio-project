// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import BlogPost from './Components/BlogPost';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar />
     <Routes>
     {/* <Route path="/" element={/Home} /> */}
     <Route path="/" element={<Home/>} />
     <Route path="/Projects" element={<Projects/>} />
     <Route path="/BlogPost" element={<BlogPost/>} />
     <Route path="/" element={<Home/>} />
     {/* <Route path='/Projects' element={/Projects>} /> */}



     </Routes>
     </Router>
    </div>
  );
}

export default App;

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Button from 'react-bootstrap/Button';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
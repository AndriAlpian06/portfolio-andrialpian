import './App.css';
import About from './parts/About';
import Header from './parts/Header';
import Hero from './parts/Hero';
import Navbar from './parts/Navbar';

import { Router, Routes, Route } from 'react-router-dom'
import Portfolio from './parts/Portfolio';
import Contact from './parts/Contact';
import Footer from './parts/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

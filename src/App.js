import './App.css';

import Navbar from './parts/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './parts/Blog'

import BackToTopButton from './parts/BackToTop';
import Beranda from './parts/Beranda';
import Footer from './parts/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Beranda />}/>
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <BackToTopButton />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;

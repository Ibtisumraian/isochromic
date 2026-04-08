import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import SmoothScroll from './components/SmoothScroll';
import Layout from './components/Layout';

function App() {
  return (
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* Persistent Layout for main experience */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </SmoothScroll>
  );
}

export default App;

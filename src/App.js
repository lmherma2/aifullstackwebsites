
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Pricing from './Pricing';
import AWSBackend from './AWSBackend';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/aws-backend" element={<AWSBackend />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

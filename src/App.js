import React from 'react';
import './App.css';
import Headers from './components/Headers';
import About from './components/About';
import Services from './components/Services.jsx'
import Views from './components/Views.jsx'
import Portfolio from './components/Portfolio.jsx';
import Feedbaack from './components/Feedbaack';
import Plans from './components/Plans';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Headers />
      <About />
      <Services />
      <Views />
      <Portfolio />
      <Feedbaack />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;

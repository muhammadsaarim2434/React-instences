import React from "react";
import Home from './pages/Home';
import Career from './pages/Career';
 
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
   
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;

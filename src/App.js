import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Best from './components/Best';
import Featured from './components/Featured';

function App() {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <Best/>
      <Featured/>
    </div>
  );
}

export default App;

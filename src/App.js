import React from 'react';
import { Navbar } from './components';
import { Footer } from './components';
import { Welcome } from './components';
import { Services } from './components';
import { Transactions } from './components';


import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services />
      <Transactions />
      <Footer/>
    </div>
  );
}

export default App;

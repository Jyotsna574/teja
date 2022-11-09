import React from 'react'
import Header from './components/header';
import Home from './components/home';
import Works from './components/works'
import './App.css'
import './home.css'
import './header.css'
import './works.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Works />
    </div>
  );
}

export default App;

import React from 'react'
import Header from './components/header';
import Home from './components/home';
import Works from './components/works'
import './styles/App.css'
import './styles/home.css'
import './styles/header.css'
import './styles/works.css'


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

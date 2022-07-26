
import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Profile';


function App() {
  return (
    <div className = "app_wrapper">
      <Header/>
      <Navbar />
      <Content />
    </div>
  );
}



export default App;

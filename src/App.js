import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, BrowserRouter,Route,} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className = "app_wrapper">
      <Header/>
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element ={<Dialogs/>}></Route>
          <Route path='/profile' element ={<Profile/>}></Route>
        </Routes>
      </div>
      {/* <Profile /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

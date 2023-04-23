import React, { useState, useContext, createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import AboveHeader from './components/partials/AboveHeader';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Sidebar from './components/partials/Sidebar';
import AdminContext from './utils/contexts/admin-context';
import http from './utils/http/httpConfig';

function App() {

  return (

    <div className='App'>
      <AboveHeader />
      <Header />
      <div className='sub-header-container'>
        {/* <Sidebar /> */}
        <Outlet />
      </div>
      <Footer />
    </div>


  );
}

export default App;

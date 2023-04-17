import React, { useState, useContext, createContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import isLoggedIn from '../../utils/auth';
import AdminContext from '../../utils/contexts/admin-context';
import http from '../../utils/http/httpConfig';
import './css/Admin.css'

const Admin = () => {
    const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(isLoggedIn());
  const value = {isAdmin, setIsAdmin};

  // useEffect(() => {
  //   http.post('/api/auth/authenticate')
  //   .then((res) => {
  //     setIsAdmin(true);
  //   })
  //   .catch((err) => {
  //     setIsAdmin(false);
  //   })
  // }, [])

  
  useEffect(() => {
    if(!isAdmin){
      navigate('/admin/login');
    }
  
}, [isAdmin])
  
  return (
    <AdminContext.Provider value={value}>        
          <Outlet />
    </AdminContext.Provider>

  );
}

export default Admin;
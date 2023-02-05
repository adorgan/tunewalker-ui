import React, { useState, useContext, createContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminContext from '../../utils/contexts/admin-context';
import http from '../../utils/http/httpConfig';

const Admin = () => {
    const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const value = {isAdmin, setIsAdmin};

  useEffect(() => {
    http.get('/authenticated')
    .then((res) => {
      setIsAdmin(true);
    })
    .catch((err) => {
      setIsAdmin(false);
    })
  }, [])

  
  useEffect(() => {
    if(!isAdmin){
        navigate('/admin/login');
    }
}, [isAdmin])
  
  return (
    <AdminContext.Provider value={value}>
        <div>Admin page</div>
          <Outlet />
    </AdminContext.Provider>

  );
}

export default Admin;
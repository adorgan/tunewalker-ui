import React, {useContext} from "react";
import BlogpostList from "../pages/home/BlogpostList";
import './css/Dashboard.css'
import { useNavigate } from "react-router-dom";
import http from "../../utils/http/httpConfig";
import AdminContext from "../../utils/contexts/admin-context";


export default function Dashboard() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  const navigate = useNavigate();
  const handleNewPostNav = () => {
    navigate('/admin/new-blogpost');
  }

  const handleLogout = () => {
    
    http.post('/auth/logout', {
      token: sessionStorage.getItem('refreshToken'),
      username: sessionStorage.getItem('username')
    })
    .then(() => {
      setIsAdmin(false);
      navigate('/admin/login');
    })
    .finally(() => {
      sessionStorage.clear();
    })
  }

  return (
    <div>
      <div className='admin-main-header'>
        <button className="dashboard-header-btn" onClick={handleNewPostNav}>New Post</button>
        <button className="dashboard-header-btn" onClick={handleLogout}>Logout</button>
      </div>
      <BlogpostList isAdmin={false}></BlogpostList>
    </div>
  )
}
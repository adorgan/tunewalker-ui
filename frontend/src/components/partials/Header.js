import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './css/Header.css'


export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className="header-container">
      <ul className="header-list">
        <li><Link to={`/`}>Home</Link></li>
        <div className="right-menu">
          <li>
            <div className="right-menu-posts" >
              <Link to={`/new-blogpost`}>New Post</Link>
            </div>
          </li>
          <li>
            <div className="right-menu-posts" >
              <Link to={`/blogposts`}>Posts</Link>
            </div>
          </li>
          <li>
            <div className="right-menu-posts" onClick={handleLogout} >
              Logout
            </div>
          </li>
        </div>

      </ul>
    </div>
  )
}
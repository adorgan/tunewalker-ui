import React from "react";
import BlogpostList from "../pages/home/BlogpostList";
import './css/Dashboard.css'
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();
  const handleNewPostNav = () => {
    navigate('/admin/new-blogpost');
  }

  return (
    <div>
      <div className='admin-main-header'>
        <button onClick={handleNewPostNav}>New Post</button>
      </div>
      <BlogpostList isAdmin={true}></BlogpostList>
    </div>
  )
}
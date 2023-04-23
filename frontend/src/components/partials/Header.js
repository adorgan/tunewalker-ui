import React from "react";
import { Link } from "react-router-dom";
import './css/Header.css'

export default function Header() {
  return (
    <div className="header-container">
      <ul className="header-list">
        <li className="right-menu-posts">
          <Link to={`/blogposts`}>ARCHIVE</Link>
        </li>
        <li>
          <div className="right-menu-posts" >
            <Link to={`/`}>CONNECT</Link>
          </div>
        </li>
        <li>
          <div className="right-menu-posts" >
            <Link to={`/`}>STATS</Link>
          </div>
        </li>
        <li>
          <div className="right-menu-posts" >
            <Link to={`/`}>GEAR</Link>
          </div>
        </li>
        <li>
          <div className="right-menu-posts" >
            <Link to={`/`}>ABOUT</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}
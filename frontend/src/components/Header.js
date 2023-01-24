import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {


    return (
        <div>
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
                    <li>Photos</li>
                </div>

            </ul>
        </div>
    )
}
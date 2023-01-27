import React from "react";
import { useNavigate } from "react-router-dom";
import './css/Blogpost.css'


export default function Blogpost({ post }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/blog/${post._id}`);
    }

    return (
        <div className="blogpost-container" onClick={handleClick}>
            <div className="blogpost-title">
                {post.blogpost_title}

            </div>
            <div className="blogpost-body">
                {post.blogpost_body}

            </div>
        </div>
    )

}
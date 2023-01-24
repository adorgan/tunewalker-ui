import React from "react";
import './Blogpost.css'
import { useNavigate } from "react-router-dom";

export default function Blogpost({  post }) {
    const navigate = useNavigate();

    function handleClick() {
        console.log(post._id);        
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
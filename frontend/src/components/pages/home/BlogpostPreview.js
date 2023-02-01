import React, { useEffect } from "react";
import './css/BlogpostPreview.css';
import { useNavigate } from "react-router-dom";

const BlogpostPreview = ({post}) => {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/blogpost/${post._id}`);
    }

    useEffect(() => {
        document.getElementById(`blogpost_${post._id}`).innerHTML = post.blogpost_body
    }, [])

    return(
        <div id={`blogpost_${post._id}`} className="blogpost-preview-container" onClick={handleClick}>
            
        </div>
    )
}

export default BlogpostPreview;
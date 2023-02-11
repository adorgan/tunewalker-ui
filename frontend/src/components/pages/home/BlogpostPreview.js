import React, { useEffect } from "react";
import './css/BlogpostPreview.css';
import { useNavigate } from "react-router-dom";

const BlogpostPreview = ({post, handleClick}) => {

    const navigate = useNavigate();

    useEffect(() => {
        // document.getElementById(`blogpost_${post._id}`).innerHTML = post.blogpost_body
    }, [])

    return(
        <div id={`blogpost_${post._id}`} className="blogpost-preview-container" onClick={handleClick}>
            <img className="blogpost-preview-album-art" src={post.blogpost_album_art}></img>
            <div>{post.blogpost_preview}</div>
        </div>
    )
}

export default BlogpostPreview;
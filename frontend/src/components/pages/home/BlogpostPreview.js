import React, { useEffect } from "react";
import './css/BlogpostPreview.css';
import { useNavigate } from "react-router-dom";

const BlogpostPreview = ({ post, handleClick }) => {

    const navigate = useNavigate();

    useEffect(() => {
        // document.getElementById(`blogpost_${post._id}`).innerHTML = post.blogpost_body
    }, [])

    return (
        <div id={`blogpost_${post._id}`} className="blogpost-preview-container" onClick={handleClick}>
            <div className="blogpost-preview-album-art-container">
                <img className="blogpost-preview-album-art" src={post.blogpost_album_art_1}></img>
                <img className="blogpost-preview-album-art" src={post.blogpost_album_art_2}></img>


            </div>
            <div>{post.blogpost_title}</div>
        </div>
    )
}

export default BlogpostPreview;
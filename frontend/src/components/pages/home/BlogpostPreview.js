import React, { useEffect, useState } from "react";
import './css/BlogpostPreview.css';
import { useNavigate } from "react-router-dom";

const BlogpostPreview = ({ post, handleClick }) => {

    const navigate = useNavigate();
    const [blogDate, setBlotDate] = useState("");

    useEffect(() => {
        const d = new Date(post.createdAt);
        setBlotDate(`${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`);
    }, [])

    return (
        <div id={`blogpost_${post._id}`} className="blogpost-preview-container" onClick={handleClick}>
            <div className="blogpost-preview-album-art-container">
                <img className="blogpost-preview-album-art" src={post.blogpost_album_art_1}></img>
                <span className="blogpost-preview-rank">{post.blogpost_album_1_rank}</span>
            </div>
            <div className="blogpost-preview-details-container">
                <div className="blogpost-preview-details-title">{post.blogpost_title}</div>
                <div>{blogDate}</div>
                <div className="blogpost-preview-details-bands-container">
                    <div>{post.blogpost_album_art_1_details.band}</div>
                    <div>{post.blogpost_album_art_2_details.band}</div>
                </div>
            </div>
            <div className="blogpost-preview-album-art-container">
                <img className="blogpost-preview-album-art" src={post.blogpost_album_art_2}></img>
                <span className="blogpost-preview-rank">{post.blogpost_album_2_rank}</span>
            </div>

        </div>
    )
}

export default BlogpostPreview;
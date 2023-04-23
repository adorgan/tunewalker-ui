import React from "react";
import './css/BlogpostMini.css';

const BlogpostMini = ({ post }) => {

    return (
        <div className="blogpost-mini-container">
            <div className="blogpost-mini-img-container">
                <img className="blogpost-mini-hero-img" src={post.blogpost_hero_photo}></img>
            </div>
            <div className="blogpost-mini-title">
                {post.blogpost_title}
            </div>
            <div className="blogpost-mini-bands">
                {`${post.blogpost_album_art_1_details.band} & ${post.blogpost_album_art_2_details.band}`.toUpperCase()}
            </div>
        </div>
    )

}

export default BlogpostMini;
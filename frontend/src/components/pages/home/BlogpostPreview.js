import React, { useEffect, useState } from "react";
import './css/BlogpostPreview.css';
import { useNavigate } from "react-router-dom";

const BlogpostPreview = ({ post, handleClick }) => {

    const navigate = useNavigate();
    const [blogDate, setBlotDate] = useState("");
    const [previewText, setPreviewText] = useState('');

    useEffect(() => {
        let tmp = document.createElement('div');
        tmp.innerHTML = post.blogpost_intro;
        let start = 0;
        for (let i = 0; i < 2; i++) {
            let index = tmp.innerText.indexOf('.') + 1;
            start = start + index;
        }
        setPreviewText(tmp.innerText.slice(0, start) + '..');

        const d = new Date(post.createdAt);
        setBlotDate(`${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`);
    }, [])

    return (
        <div id={`blogpost_${post._id}`} className="blogpost-preview-container" onClick={handleClick}>
            <div>
                <img className="blogpost-preview-hero-img" src={post.blogpost_hero_photo}></img>
            </div>
            <div className="blogpost-preview-details-title">{post.blogpost_title}</div>
            <div className="blogpost-preview-bands">
                {`Featuring ${post.blogpost_album_art_1_details.band} and ${post.blogpost_album_art_2_details.band}`.toUpperCase()}
            </div>
            <div className="blogpost-preview-by-line">By Tim Dorgan</div>
            <div>{previewText}
                <span className="blogpost-preview-continue-reading-span">continue reading</span>
            </div>
        </div>
    )
}

export default BlogpostPreview;
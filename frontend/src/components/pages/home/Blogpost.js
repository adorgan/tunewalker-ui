import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './css/Blogpost.css'


export default function Blogpost({ post }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/blogpost/${post._id}`);
    }

    useEffect(() => {
        document.getElementById('blogpost_body_id').innerHTML = post.blogpost_body;
    })

    return (
        <div className="blogpost-container" onClick={handleClick}>
            <div className="blogpost-title">
                {post.blogpost_title}

            </div>
            <div id="blogpost_body_id" className="blogpost-body">
                {/* {post.blogpost_body} */}

            </div>
        </div>
    )

}
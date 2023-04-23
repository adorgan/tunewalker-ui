import React, { useState, useEffect } from "react";
import BlogpostMini from "./BlogpostMini";
import './css/BlogpostMiniList.css';

const BlogpostMiniList = ({ posts }) => {

    const [list, setList] = useState([]);


    useEffect(() => {
        const renderedPosts = posts.map((post) => {
            return (
                <div key={post.id}>
                    <BlogpostMini post={post} />
                </div>
            )
        });
        setList(renderedPosts);
    }, []);


    return (
        <div className="blogpost-mini-list-container">
            {list}
        </div>
    )


}

export default BlogpostMiniList;
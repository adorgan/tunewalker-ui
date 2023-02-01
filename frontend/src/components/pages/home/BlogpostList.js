import React, { useState, useEffect } from "react";
import Blogpost from "./Blogpost";
import http from "../../../utils/http/httpConfig";
import './css/BlogpostList.css'
import BlogpostPreview from "./BlogpostPreview";


export default function BlogpostList() {

    const [list, setList] = useState([]);

    const getPosts = async () => {
        http.get("/blogpost")
            .then((posts) => {
                const arr = posts.data;
                setList(arr.map((post) => {
                    return(
                        <BlogpostPreview key={post._id} post={post}/>
                    )
                }))
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPosts();
    }, [])





    return (
        <div className="blogpost-list">
            {list}
        </div>
    );
}
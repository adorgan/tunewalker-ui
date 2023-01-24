import React, { useState, useEffect } from "react";
import axios from "axios";
import './BlogpostList.css'
import Blogpost from "./Blogpost";

export default function BlogpostList() {

    const [list, setList] = useState([]);

    const getPosts = async () => {
        return axios.get("http://localhost:4000/blogpost")
            .then((posts) => {
                const arr = posts.data;
                setList(arr.map((post) => {
                    return(
                        <Blogpost key={post._id} post={post}/>
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
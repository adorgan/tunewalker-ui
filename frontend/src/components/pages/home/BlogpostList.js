import React, { useState, useEffect, useContext } from "react";
import Blogpost from "./Blogpost";
import http from "../../../utils/http/httpConfig";
import './css/BlogpostList.css'
import BlogpostPreview from "./BlogpostPreview";
import AdminContext from "../../../utils/contexts/admin-context";
import { useNavigate } from "react-router-dom";

export default function BlogpostList({ isAdmin = false }) {
    // const {isAdmin, setIsAdmin} = useContext(AdminContext);

    const [list, setList] = useState([]);
    const navigate = useNavigate();

    const getPosts = async () => {
        http.get("/blogpost/list")
            .then((posts) => {
                const arr = posts.data;
                setList(arr.map((post) => {
                    let url = "";
                    if (isAdmin) {
                        url = `admin/blogpost/${post.id}`
                    }
                    else {
                        url = `blogpost/${post.id}`
                    }

                    return (

                        <BlogpostPreview key={post.id} post={post} handleClick={() => navigate(url)} />

                    )
                }))
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPosts();
    }, [])





    return (<>
        <div className="blogpost-list">
            {list}
        </div>
    </>
    );
}
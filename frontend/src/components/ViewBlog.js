import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blogpost from "./Blogpost";

export default function ViewBlog({ props }) {

    const { id } = useParams();


    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/blogpost/${id}`)
            .then((res) => { setPost(res.data) })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {post &&
                <Blogpost post={post} />
            }
        </div>



    )

}
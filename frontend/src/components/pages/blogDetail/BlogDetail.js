import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../utils/http/httpConfig";
import Blogpost from "../home/Blogpost";
import './css/BlogDetail.css'


const BlogDetail = () => {

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        http.get(`blogpost/${id}`)
            .then((res) => { setPost(res.data) })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="blog-detail-container">
            {post &&
                <Blogpost post={post} />
            }
        </div>



    )

}

export default BlogDetail;
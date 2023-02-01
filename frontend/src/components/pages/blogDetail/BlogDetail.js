import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../utils/http/httpConfig";
import Blogpost from "../home/Blogpost";
import './css/BlogDetail.css'
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../partials/buttons/SubmitButton";


const BlogDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        http.get(`blogpost/${id}`)
            .then((res) => { setPost(res.data) })
            .catch((err) => console.log(err))
    }, [])

    const handleClick = () => {
        navigate('/blogpost/edit', { state: { post: post } });
    }

    const handleDelete = () => {
        http.delete(`blogpost/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="blog-detail-container">
            {post &&
                <>
                    <div>{post.blogpost_title}</div>
                    {post.blogpost_photos.map((imgObject, i) =>
                        <div key={i}>
                            <img  className="blog-detail-image" src={imgObject.photoURL}></img>
                            <div>{imgObject.caption}</div>
                        </div>


                    )}

                    <div onClick={handleClick}>
                        <Blogpost post={post} />
                    </div>
                    <SubmitButton id={'delete-post-btn'} action={'Delete Post'} onSubmit={handleDelete} valid={true} />
                </>
            }
        </div>



    )

}

export default BlogDetail;
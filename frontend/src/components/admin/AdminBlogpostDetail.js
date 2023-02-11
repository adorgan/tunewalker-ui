import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../utils/http/httpConfig";
import './css/AdminBlogpostDetail.css'
import { useNavigate } from "react-router-dom";
import SubmitButton from "../partials/buttons/SubmitButton";

const AdminBlogpostDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    // const { isAdmin } = useContext(AdminContext)

    useEffect(() => {
        http.get(`blogpost/${id}`)
            .then((res) => {
                setPost(res.data);

            })
            .catch((err) => console.log(err))
    }, [])

    const handleEdit = () => {
        navigate('/admin/blogpost/edit', { state: { post: post } });
    }

    const handleHomeClick = () => {
        navigate('/admin/');
    }

    const handleDelete = () => {
        http.delete(`blogpost/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="detail-page-container">
            <div className="admin-action-button-container">
                <button onClick={handleHomeClick}>Home</button>
                <div>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>

            </div>
            <div className="blog-detail-container">
                {post &&
                    <>

                        <div className="blog-detail-header-container">
                            <h2>{post.blogpost_title}</h2>
                            <img className="blog-detail-album-art" src={post.blogpost_album_art}></img>
                        </div>

                        {/* {post.blogpost_photos.map((imgObject, i) => */}
                        {/* <div className="blog-detail-image-container" key={i}> */}
                        <div className="blog-detail-image-container">
                            <img className="blog-detail-image" src={post?.blogpost_photos[0]?.photoURL}></img>
                            {/* <div>{post.blogpost_photos[0].caption}</div> */}
                        </div>
                        {/* )} */}
                        <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_body }}></div>



                    </>
                }
            </div>

        </div>

    )

}

export default AdminBlogpostDetail;
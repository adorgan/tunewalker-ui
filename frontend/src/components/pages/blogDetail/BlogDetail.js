import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../utils/http/httpConfig";
import Blogpost from "../home/Blogpost";
import './css/BlogDetail.css'
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../partials/buttons/SubmitButton";
import AdminContext from "../../../utils/contexts/admin-context";

const BlogDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [blogDate, setBlotDate] = useState("");
    // const { isAdmin } = useContext(AdminContext)

    useEffect(() => {
        http.get(`blogpost/${id}`)
            .then((res) => {
                setPost(res.data);
                const d = new Date(res.data.createdAt);
                setBlotDate(`${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`);

            })
            .catch((err) => console.log(err));

    }, [])

    const handleEdit = () => {
        navigate('/admin/blogpost/edit', { state: { post: post } });
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
            {/* {isAdmin && 
            <div className="admin-action-button-container">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            } */}

            {post &&
                <div className="blog-detail-container">
                    <div className="blog-detail-header">
                        <div className="blog-detail-image-container">
                            <img className="blog-detail-image" src={post?.blogpost_hero_photo}></img>
                            <div className="blog-detail-hero-caption">{post.blogpost_hero_photo_caption}</div>
                        </div>
                        <h1>{post.blogpost_title}</h1>
                        <div className="blog-detail-publish-date">{blogDate}</div>
                    </div>
                    <div className="blog-detail-content">
                        <div className="blog-detail-left">
                            {/* <img className="blog-detail-album-art" src={post.blogpost_album_art_1}></img> */}
                        </div>

                        <div className="blog-detail-center">
                            <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_intro }}></div>
                            <hr></hr>
                            <div>#{post.blogpost_album_1_rank}</div>
                            <div className="blog-detail-album-details">
                                <img className="blog-detail-album-art" src={post.blogpost_album_art_1}></img>
                                <div className="blog-detail-album-details-details">
                                    <div>
                                        <div className="blog-detail-album-art-title">{post.blogpost_album_art_1_details.title.toUpperCase()}</div>
                                        <div className="blog-detail-album-art-artist">By {post.blogpost_album_art_1_details.band}</div>
                                    </div>

                                    <div>
                                        <div>Release Date: {post.blogpost_album_art_1_details.releaseDate}</div>
                                        <div>Top Chart Position: {post.blogpost_album_art_1_details.chartPosition}</div>
                                    </div>

                                </div>
                            </div>
                            <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_review_1 }}></div>
                            <hr></hr>
                            <div>#{post.blogpost_album_2_rank}</div>
                            <div className="blog-detail-album-details">
                                <img className="blog-detail-album-art" src={post.blogpost_album_art_2}></img>
                                <div className="blog-detail-album-details-details">
                                    <div>
                                        <div className="blog-detail-album-art-title">{post.blogpost_album_art_2_details.title.toUpperCase()}</div>
                                        <div className="blog-detail-album-art-artist">By {post.blogpost_album_art_2_details.band}</div>
                                    </div>
                                    <div>
                                        <div>Release Date: {post.blogpost_album_art_2_details.releaseDate}</div>
                                        <div>Top Chart Position: {post.blogpost_album_art_2_details.chartPosition}</div>
                                    </div>

                                </div>
                            </div>
                            <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_review_2 }}></div>

                            {/* <hr></hr>
                            <div>{post.blogpost_album_2_rank}</div>
                            <div className="blog-detail-album-details">
                                <img className="blog-detail-album-art" src={post.blogpost_album_art_2}></img>
                                <div className="blog-detail-album-details-details">
                                    <div>
                                        <div className="blog-detail-album-art-title">{post.blogpost_album_art_2_details.title.toUpperCase()}</div>
                                        <div className="blog-detail-album-art-artist">By {post.blogpost_album_art_2_details.band}</div>
                                    </div>
                                    <div>
                                        <div>Release Date: {post.blogpost_album_art_2_details.releaseDate}</div>
                                        <div>Top Chart Position: {post.blogpost_album_art_2_details.chartPosition}</div>
                                    </div>

                                </div>
                            </div>
                            <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_review_2 }}></div> */}

                        </div>

                        <div className="blog-detail-right">
                            <img className="blog-detail-album-art" src={post.blogpost_map}></img>
                        </div>

                    </div>

                    <div className="blog-detail-woulda-container">
                        <h1>Could Shoulda</h1>
                        <div className="blog-detail-woulda-details-container">
                            <div className="blog-detail-woulda-details">
                                <img className="blog-detail-album-art" src={post.blogpost_coulda_shoulda_album_art_1}></img>
                                <div>{post.blogpost_coulda_shoulda_1_details.title}</div>
                                <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_coulda_shoulda_1_details.body }}></div>
                            </div>

                            <div className="blog-detail-woulda-details">
                                <img className="blog-detail-album-art" src={post.blogpost_coulda_shoulda_album_art_2}></img>
                                <div>{post.blogpost_coulda_shoulda_2_details.title}</div>
                                <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_coulda_shoulda_2_details.body }}></div>
                            </div>
                        </div>

                    </div>




                </div>
            }


        </div >

    )

}

export default BlogDetail;
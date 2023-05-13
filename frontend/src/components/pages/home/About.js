import React, { useState, useEffect } from "react";
import '../blogDetail/css/BlogDetail.css';
import http from "../../../utils/http/httpConfig";
import './css/About.css';

const About = () => {
    const [post, setPost] = useState(null);
    const [blogDate, setBlotDate] = useState("");

    useEffect(() => {
        http.get(`blogpost/about`)
            .then((res) => {
                setPost(res.data[0]);
                const d = new Date(res.data[0].createdAt);
                setBlotDate(`${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`);

            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className="detail-page-container">
            {post &&
                <div className="blog-detail-container">
                    <div className="blog-detail-header">
                        <div className="blog-detail-image-container">
                            <img className="blog-detail-image" src={post?.blogpost_hero_photo}></img>
                            {/* <div className="blog-detail-hero-caption">{post.blogpost_hero_photo_caption}</div> */}
                        </div>
                        <h1 className="about-title">{post.blogpost_title}</h1>
                        {/* <div className="blog-detail-publish-date">{blogDate}</div> */}
                    </div>
                    <div className="blog-detail-content">
                        <div className="blog-detail-left"></div>

                        <div className="blog-detail-center">
                            <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_intro }}></div>
                        </div>
                        <div className="blog-detail-right"></div>
                    </div>
                </div>
            }
        </div >
    )
}

export default About;
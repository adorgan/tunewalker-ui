import React, { useState, useEffect } from "react";
import '../blogDetail/css/BlogDetail.css';
import http from "../../../utils/http/httpConfig";
import './css/About.css';
import RollingStone from "./RollingStone";
import { FacebookProvider, Comments } from 'react-facebook';


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
                    <div className="about-detail-content">
                        <div className="blog-detail-left">
                            <RollingStone />
                        </div>

                        <div className="blog-detail-center">
                            <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_intro }}></div>
                            <br></br>
                            <br></br>
                            <FacebookProvider appId="1570509210111943">
                                <Comments href="https://thetunewalker.com/about" />
                            </FacebookProvider>
                        </div>
                        <div className="blog-detail-left"></div>
                    </div>
                </div>
            }
        </div >
    )
}

export default About;
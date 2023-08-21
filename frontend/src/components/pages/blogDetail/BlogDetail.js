import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../utils/http/httpConfig";
import './css/BlogDetail.css'
import RollingStone from "../home/RollingStone";
import { FacebookProvider, Comments } from 'react-facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'



const BlogDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [blogDate, setBlotDate] = useState("");

    useEffect(() => {
        http.get(`blogpost/${id}`)
            .then((res) => {
                setPost(res.data);
                const d = new Date(res.data.createdAt);
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
                            <div className="blog-detail-hero-caption">{post.blogpost_hero_photo_caption}</div>
                        </div>
                        <h1 className="blog-detail-title">{post.blogpost_title}</h1>
                        <div className="blog-detail-publish-date">
                            {blogDate}
                        </div>
                        {/* <div className="fb-share-button" data-href="https://thetunewalker.com/blogpost/6442f5e5244d332f2dccabe5" data-layout="" data-size="">
                            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fthetunewalker.com%2Fblogpost%2F${post.id}&amp;src=sdkpreparse`} className="facebook-link fb-xfbml-parse-ignore">
                                <FontAwesomeIcon className="icon-facebook" icon={faFacebookSquare} />
                            </a>
                        </div> */}



                    </div>
                    <div className="blog-detail-content">
                        <div className="blog-detail-left">
                            <RollingStone />
                        </div>

                        <div className="blog-detail-center">
                            <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_intro }}></div>
                            <hr></hr>
                            <div className="blog-detail-album-rank">{post.blogpost_album_1_rank}</div>
                            <div className="blog-detail-album-details">
                                <img className="blog-detail-album-art" src={post.blogpost_album_art_1}></img>
                                <div className="blog-detail-album-details-details">
                                    <div>
                                        <div className="blog-detail-album-art-title">{post.blogpost_album_art_1_details.title.toUpperCase()}</div>
                                        <div className="blog-detail-album-art-artist">{post.blogpost_album_art_1_details.band}</div>
                                    </div>

                                    <div className="blog-detail-album-art-details-info-container">
                                        <div>Release Date: {post.blogpost_album_art_1_details.releaseDate}</div>
                                        <div>Top Chart Position: {post.blogpost_album_art_1_details.chartPosition}</div>
                                    </div>

                                </div>
                            </div>
                            <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_review_1 }}></div>
                            <hr></hr>
                            <div className="blog-detail-album-rank">{post.blogpost_album_2_rank}</div>
                            <div className="blog-detail-album-details">
                                <img className="blog-detail-album-art" src={post.blogpost_album_art_2}></img>
                                <div className="blog-detail-album-details-details">
                                    <div>
                                        <div className="blog-detail-album-art-title">{post.blogpost_album_art_2_details.title.toUpperCase()}</div>
                                        <div className="blog-detail-album-art-artist">{post.blogpost_album_art_2_details.band}</div>
                                    </div>
                                    <div className="blog-detail-album-art-details-info-container">
                                        <div>Release Date: {post.blogpost_album_art_2_details.releaseDate}</div>
                                        <div>Top Chart Position: {post.blogpost_album_art_2_details.chartPosition}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_review_2 }}></div>
                            <br></br>
                            <br></br>
                            <FacebookProvider appId="1570509210111943">
                                <Comments href={`https://thetunewalker.com/blogpost/${id}`} />
                            </FacebookProvider>
                        </div>

                        <br></br>
                        <br></br>

                        <div className="blog-detail-right">
                            <div className="blog-detail-map-container">
                                <img className="blog-detail-map" src={post.blogpost_map}></img>
                                <div className="blog-detail-map-details-container">
                                    <div>{post.blogpost_map_details.miles} miles</div>
                                    <div>{post.blogpost_map_details.steps} steps</div>
                                    <div>{post.blogpost_map_details.hours}:{post.blogpost_map_details.minutes < 10 ? post.blogpost_map_details.minutes + "0" : post.blogpost_map_details.minutes}</div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-detail-woulda-container">
                        <h1>Coulda Shoulda</h1>
                        <h4>Two albums that were, in my opinion, unjustly  left out of the Rolling Stone Top 100</h4>
                        <div className="blog-detail-woulda-details-container">
                            <div className="blog-detail-woulda-details">
                                <img className="blog-detail-album-art" src={post.blogpost_coulda_shoulda_album_art_1}></img>
                                <div className="blog-detail-coulda-woulda-title">{post.blogpost_coulda_shoulda_1_details.title}</div>
                                <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.blogpost_coulda_shoulda_1_details.body }}></div>
                            </div>

                            <div className="blog-detail-woulda-details">
                                <img className="blog-detail-album-art" src={post.blogpost_coulda_shoulda_album_art_2}></img>
                                <div className="blog-detail-coulda-woulda-title">{post.blogpost_coulda_shoulda_2_details.title}</div>
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
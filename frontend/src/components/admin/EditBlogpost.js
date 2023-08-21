import React, { useState, useEffect, useRef } from "react";
import './css/NewBlogpost.css'
import './css/EditBlogpost.css'
import StringInput from "../partials/forms/inputs/String.input";
import http from '../../utils/http/httpConfig'
import Editor from "../partials/forms/inputs/Editor";
import { useNavigate, useLocation } from 'react-router-dom';
import TextareaInput from "../partials/forms/inputs/Textarea.input";
import { find, findIndex } from "lodash";


const EditBlogpost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const post = location.state.post;

    const [blogpostTitle, setBlogpostTitle] = useState(post.blogpost_title);
    const [blogpostPhotos, setBlogpostPhotos] = useState(post.blogpost_photos);

    const [blogpostMap, setBlogpostMap] = useState(post.blogpost_map);
    const [blogpostCouldaShouldaAlbumArt1, setBlogpostCouldaShouldaAlbumArt1] = useState(post.blogpost_coulda_shoulda_album_art_1);
    const [blogpostCouldaShouldaAlbumArt2, setBlogpostCouldaShouldaAlbumArt2] = useState(post.blogpost_coulda_shoulda_album_art_2);
    const [blogpostHeroPhoto, setBlogpostHeroPhoto] = useState(post.blogpost_hero_photo);
    const [blogpostAlbumArt1, setBlogpostAlbumArt1] = useState(post.blogpost_album_art_1);
    const [blogpostAlbumArt2, setBlogpostAlbumArt2] = useState(post.blogpost_album_art_2);

    const [blogpostIntro, setBlogpostIntro] = useState(post.blogpost_intro);
    const [blogpostReview1, setBlogpostReview1] = useState(post.blogpost_review_1);
    const [blogpostReview2, setBlogpostReview2] = useState(post.blogpost_review_2);
    const [blogpostHeroPhotoCaption, setBlogpostHeroPhotoCaption] = useState(post.blogpost_hero_photo_caption);

    const [blogpostAlbumArt1Title, setBlogpostAlbumArt1Title] = useState(post.blogpost_album_art_1_details.title);
    const [blogpostAlbumArt1Band, setBlogpostAlbumArt1Band] = useState(post.blogpost_album_art_1_details.band);
    const [blogpostAlbumArt1ReleaseDate, setBlogpostAlbumArt1ReleaseDate] = useState(post.blogpost_album_art_1_details.releaseDate);
    const [blogpostAlbumArt1ChartPosition, setBlogpostAlbumArt1ChartPosition] = useState(post.blogpost_album_art_1_details.chartPosition);
    const [blogpostAlbum1Rank, setBlogpostAlbum1Rank] = useState(post.blogpost_album_1_rank);

    const [blogpostAlbumArt2Title, setBlogpostAlbumArt2Title] = useState(post.blogpost_album_art_2_details.title);
    const [blogpostAlbumArt2Band, setBlogpostAlbumArt2Band] = useState(post.blogpost_album_art_2_details.band);
    const [blogpostAlbumArt2ReleaseDate, setBlogpostAlbumArt2ReleaseDate] = useState(post.blogpost_album_art_2_details.releaseDate);
    const [blogpostAlbumArt2ChartPosition, setBlogpostAlbumArt2ChartPosition] = useState(post.blogpost_album_art_2_details.chartPosition);
    const [blogpostAlbum2Rank, setBlogpostAlbum2Rank] = useState(post.blogpost_album_2_rank);

    const [blogpostMapSteps, setBlogpostMapSteps] = useState(post.blogpost_map_details.steps);
    const [blogpostMapMiles, setBlogpostMapMiles] = useState(post.blogpost_map_details.miles);
    const [blogpostMapHours, setBlogpostMapHours] = useState(post.blogpost_map_details.hours);
    const [blogpostMapMinutes, setBlogpostMapMinutes] = useState(post.blogpost_map_details.minutes);

    const [blogpostCouldaShoulda1Title, setBlogpostCouldaShoulda1Title] = useState(post.blogpost_coulda_shoulda_1_details.title);
    const [blogpostCouldaShoulda1Body, setBlogpostCouldaShoulda1Body] = useState(post.blogpost_coulda_shoulda_1_details.body);
    const [blogpostCouldaShoulda2Title, setBlogpostCouldaShoulda2Title] = useState(post.blogpost_coulda_shoulda_2_details.title);
    const [blogpostCouldaShoulda2Body, setBlogpostCouldaShoulda2Body] = useState(post.blogpost_coulda_shoulda_2_details.body);

    

    useEffect(() => {
        // setFormIsValid(checkFormValidity(formData));
    }, [blogpostTitle, blogpostPhotos])


    const checkFormValidity = (formData) => {
        const values = Object.values(formData);
        for (let i = 0; i < values.length; i++) {
            if (!values[i]) {
                return false;
            }
        }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        const payload = {};
        payload['blogpost_album_1_rank']= blogpostAlbum1Rank;
        payload['blogpost_album_2_rank']= blogpostAlbum2Rank
        payload['blogpost_title']= blogpostTitle
        payload['blogpost_intro'] = blogpostIntro
        payload['blogpost_review_1'] = blogpostReview1
        payload['blogpost_review_2']= blogpostReview2
        payload['blogpost_hero_photo_caption']= blogpostHeroPhotoCaption
        payload['blogpost_album_art_1_details'] = 
            {
                title: blogpostAlbumArt1Title,
                band: blogpostAlbumArt1Band,
                releaseDate: blogpostAlbumArt1ReleaseDate,
                chartPosition: blogpostAlbumArt1ChartPosition
            }
        

        payload['blogpost_album_art_2_details']= 
            {
                title: blogpostAlbumArt2Title,
                band: blogpostAlbumArt2Band,
                releaseDate: blogpostAlbumArt2ReleaseDate,
                chartPosition: blogpostAlbumArt2ChartPosition
            }
        

        payload['blogpost_map_details'] = 
            {
                steps: Number(blogpostMapSteps),
                miles: Number(blogpostMapMiles),
                hours: Number(blogpostMapHours),
                minutes: Number(blogpostMapMinutes)
            }
        

        payload['blogpost_coulda_shoulda_1_details'] = 
            {
                title: blogpostCouldaShoulda1Title,
                body: blogpostCouldaShoulda1Body
            }
        

        payload['blogpost_coulda_shoulda_2_details']= 
            {
                title: blogpostCouldaShoulda2Title,
                body: blogpostCouldaShoulda2Body
            }

        payload['blogpost_album_art_1'] = blogpostAlbumArt1;
        payload['blogpost_album_art_2'] = blogpostAlbumArt2;
        payload['blogpost_coulda_shoulda_album_art_1'] = blogpostCouldaShouldaAlbumArt1;
        payload['blogpost_coulda_shoulda_album_art_2'] = blogpostCouldaShouldaAlbumArt2;
        payload['blogpost_map'] = blogpostMap;
        payload['blogpost_hero_photo'] = blogpostHeroPhoto;
        payload['createdAt'] = post.createdAt;
        

        

        http.put(`admin/blogpost/${post.id}`, payload)
            .then((res) => {
                navigate(`/admin`)
            })
            .catch((err) => console.log(err))

    }

    const handleCaptionChange = (e) => {
        // console.log(e.target.id);
        const obj = find(blogpostPhotos, (o) => o.photoURL === e.target.id);

        setBlogpostPhotos((prev) => {
            const i = findIndex(blogpostPhotos, (o) => o.photoURL === e.target.id);
            const a = [...prev];
            a[i].caption = e.target.value
            return a;
        })
    }

    // Blog Post Content

    const handleEditorIntro = (text) => {
        let value;
        if (text === '<p><br></p>') {
            value = '';
        }
        else {
            value = text;
        }
        setBlogpostIntro(value);
    }

    const handleEditorReview1 = (text) => {
        let value;
        if (text === '<p><br></p>') {
            value = '';
        }
        else {
            value = text;
        }
        setBlogpostReview1(value);
    }

    const handleEditorReview2 = (text) => {
        let value;
        if (text === '<p><br></p>') {
            value = '';
        }
        else {
            value = text;
        }
        setBlogpostReview2(value);
    }

    const handleEditorCouldaWoulda1Body = (text) => {
        let value;
        if (text === '<p><br></p>') {
            value = '';
        }
        else {
            value = text;
        }
        setBlogpostCouldaShoulda1Body(value);
    }

    const handleEditorCouldaWoulda2Body = (text) => {
        let value;
        if (text === '<p><br></p>') {
            value = '';
        }
        else {
            value = text;
        }
        setBlogpostCouldaShoulda2Body(value);
    }


    return (


        <div>

            <form className="new-post-form" >
                <StringInput controlName={'blogpost_title'} myLabel={'Title'} value={blogpostTitle} onChange={(e) => setBlogpostTitle(e.target.value)} />
                <Editor handleEditorChange={handleEditorIntro} value={blogpostIntro} label={'Intro:'} />
                <Editor handleEditorChange={handleEditorReview1} value={blogpostReview1} label={'Review 1:'} />
                <Editor handleEditorChange={handleEditorReview2} value={blogpostReview2} label={'Review 2:'} />

                <div>
                    Hero Image
                    <img className="edit-blogpost-hero-image" src={post.blogpost_hero_photo}></img>
                    <TextareaInput controlName={'blogpost_hero_photo_caption'} value={blogpostHeroPhotoCaption} myLabel={'Hero Image Caption:'} onChange={(e) => setBlogpostHeroPhotoCaption(e.target.value)} />
                </div>

                <div>
                    <h5>Album 1 Details</h5>
                    <img className="edit-blogpost-hero-image" src={post.blogpost_album_art_1}></img>
                    <div>
                        <label htmlFor="album-art-1-title">Album 1 Title</label>
                        <input id="album-art-1-title" value={blogpostAlbumArt1Title} onChange={(e) => setBlogpostAlbumArt1Title(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="album-art-1-rank">Album 1 Rank</label>
                        <input id="album-art-1-rank" value={blogpostAlbum1Rank} onChange={(e) => setBlogpostAlbum1Rank(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="album-art-1-band">Album 1 Band</label>
                        <input id="album-art-1-band" value={blogpostAlbumArt1Band} onChange={(e) => setBlogpostAlbumArt1Band(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="album-art-1-release-date">Album 1 Release Date</label>
                        <input id="album-art-1-release-date" value={blogpostAlbumArt1ReleaseDate} onChange={(e) => setBlogpostAlbumArt1ReleaseDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="album-art-1-chart-position">Album 1 Chart Position</label>
                        <input id="album-art-1-chart-position" value={blogpostAlbumArt1ChartPosition} onChange={(e) => setBlogpostAlbumArt1ChartPosition(e.target.value)} />
                    </div>
                </div>
                <div>
                    <h5>Album 2 Details</h5>
                    <img className="edit-blogpost-hero-image" src={post.blogpost_album_art_2}></img>
                    <div>
                        <label htmlFor="album-art-2-title">Album 2 Title</label>
                        <input id="album-art-2-title" value={blogpostAlbumArt2Title} onChange={(e) => setBlogpostAlbumArt2Title(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="album-art-2-rank">Album 2 Rank</label>
                        <input id="album-art-2-rank" value={blogpostAlbum2Rank} onChange={(e) => setBlogpostAlbum2Rank(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="album-art-2-band">Album 2 Band</label>
                        <input id="album-art-2-band" value={blogpostAlbumArt2Band} onChange={(e) => setBlogpostAlbumArt2Band(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="album-art-2-release-date">Album 2 Release Date</label>
                        <input id="album-art-2-release-date" value={blogpostAlbumArt2ReleaseDate} onChange={(e) => setBlogpostAlbumArt2ReleaseDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="album-art-2-chart-position">Album 2 Chart Position</label>
                        <input id="album-art-2-chart-position" value={blogpostAlbumArt2ChartPosition} onChange={(e) => setBlogpostAlbumArt2ChartPosition(e.target.value)} />
                    </div>
                </div>

                <div>
                <img className="edit-blogpost-hero-image" src={post.blogpost_map}></img>
                    <div>
                        <label htmlFor="map-steps">Steps</label>
                        <input type="number" id="map-steps" value={blogpostMapSteps} onChange={(e) => setBlogpostMapSteps(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="map-miles">Miles</label>
                        <input type="number" id="map-miles" value={blogpostMapMiles} onChange={(e) => setBlogpostMapMiles(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="map-hours">Hours</label>
                        <input type="number" id="map-hours" value={blogpostMapHours} onChange={(e) => setBlogpostMapHours(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="map-minutes">Minutes</label>
                        <input type="number" id="map-minutes" value={blogpostMapMinutes} onChange={(e) => setBlogpostMapMinutes(e.target.value)} />
                    </div>
                </div>

                <div>
                <StringInput controlName={'blogpost_coulda-shoulda-1-title'} myLabel={'Coulda Shoulda 1 Title:'} value={blogpostCouldaShoulda1Title} onChange={(e) => setBlogpostCouldaShoulda1Title(e.target.value)} />
                <img className="edit-blogpost-hero-image" src={post.blogpost_coulda_shoulda_album_art_1}></img>
                
                <Editor handleEditorChange={handleEditorCouldaWoulda1Body} value={blogpostCouldaShoulda1Body} label={'Coulda Shoulda 1 Body:'} />
                <StringInput controlName={'blogpost_coulda-shoulda-2-title'} myLabel={'Coulda Shoulda 2 Title:'} value={blogpostCouldaShoulda2Title} onChange={(e) => setBlogpostCouldaShoulda2Title(e.target.value)} />
                <img className="edit-blogpost-hero-image" src={post.blogpost_coulda_shoulda_album_art_2}></img>
                
                <Editor handleEditorChange={handleEditorCouldaWoulda2Body} value={blogpostCouldaShoulda2Body} label={'Coulda Shoulda 2 Body:'} />
                </div>







                <button type="submit" onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default EditBlogpost;
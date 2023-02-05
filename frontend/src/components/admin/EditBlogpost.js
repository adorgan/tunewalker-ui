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
    const [blogpostPreview, setBlogpostPreview] = useState(post.blogpost_preview);
    const [blogpostBody, setBlogpostBody] = useState(post.blogpost_body);
    const [blogpostAlbumArt, setBlogpostAlbumArt] = useState(post.blogpost_album_art);
    const [blogpostPhotos, setBlogpostPhotos] = useState(post.blogpost_photos);

    const [formIsValid, setFormIsValid] = useState(false);



    const handleEditor = (text) => {
        let value;
        if (text === '<p><br></p>') {
            value = '';
        }
        else {
            value = text;
        }

        setBlogpostBody(value);
    }

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
        let formData = {
            'blogpost_title': blogpostTitle,
            'blogpost_body': blogpostBody,
            'blogpost_preview': blogpostPreview,
            'blogpost_album_art': blogpostAlbumArt,
            'blogpost_photos': []
        }

        blogpostPhotos.forEach((photoObj) => {
            formData['blogpost_photos'].push({
                photoURL: photoObj.photoURL,
                caption: photoObj.caption
            })
        })

       
        http.put(`blogpost/${post._id}`, formData)
            .then((res) => {
                navigate(`/blogpost/${post._id}`)
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


    return (


        <div>

            <form className="new-post-form" >
                <StringInput controlName={'blogpost_title'} myLabel={'Title'} value={blogpostTitle} onChange={(e) => setBlogpostTitle(e.target.value)} />
                <TextareaInput controlName={'blogpost_preview'} myLabel={'Preview:'} value={blogpostPreview} onChange={(e) => setBlogpostPreview(e.target.value)} />
                <Editor handleChange={handleEditor} value={blogpostBody} />


                <div className="edit-blogpost-album-art-container">
                    <img className="edit-blogpost-album-art-img" src={blogpostAlbumArt}></img>
                </div>

                {blogpostPhotos.map((photosObject) =>
                    <div key={photosObject.photoURL} className="edit-blogpost-album-art-container">
                        <img className="edit-blogpost-album-art-img" src={photosObject.photoURL}></img>
                        <textarea id={photosObject.photoURL} value={photosObject.caption} onChange={handleCaptionChange}></textarea>
                    </div>

                )}







                <button type="submit" onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default EditBlogpost;
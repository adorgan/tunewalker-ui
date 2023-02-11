import React, { useState, useEffect, useRef } from "react";
import './css/NewBlogpost.css'
import StringInput from "../partials/forms/inputs/string.input";
import http from '../../utils/http/httpConfig'
import Editor from "../partials/forms/inputs/editor";
import TextareaInput from "../partials/forms/inputs/textarea.input";
import SubmitButton from "../partials/buttons/SubmitButton";
import { useNavigate } from "react-router-dom";
import FileInputList from "./FileInputList";


export default function NewBlogpost() {
    const navigate = useNavigate();
    const [formIsValid, setFormIsValid] = useState(false);
    const [blogpostTitle, setBlogpostTitle] = useState('');
    const [blogpostBody, setBlogpostBody] = useState('');
    const [blogpostPreview, setBlogpostPreview] = useState('');
    const [blogpostFiles, setBlogpostFiles] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null
    });
    const [blogpostAlbumArt, setBlogpostAlbumArt] = useState('');
    const [blogpostMap, setBlogpostMap] = useState('');
    const [inputIdVal, setInputIdVal] = useState(1);
    const [inputIdArray, setInputIdArray] = useState([0]);
    const [blogpostCaptions, setBlogpostCaptions] = useState({
        1: '',
        2: '',
        3: '',
        4: '',
        5: ''
    });

    const albumArtRef = useRef(null);
    const mapRef = useRef(null);


    const formControls = [blogpostTitle, blogpostBody, blogpostPreview, blogpostFiles, blogpostCaptions, blogpostAlbumArt];

    const handleFileChange = (event) => {
        const id = Number(event.target.id.split('_')[0]);
        setBlogpostFiles((prev) => {
            let o = { ...prev };
            o[id] = event.target.files[0];
            return o;
        });
        document.getElementById(`${id}_blogpost_photo_filename`).innerText = event.target.files[0].name
    }



    const removeFile = (e) => {
        e.preventDefault();
        const id = Number(e.target.id.split('_')[0]);
        setBlogpostFiles((prev) => {
            let o = { ...prev };
            o[id] = null;
            return o;
        })
        document.getElementById(`${id}_blogpost_photo_filename`).innerText = '';
    }

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
        setFormIsValid(checkFormValidity());
    }, formControls)

    const checkFormValidity = () => {
        for (let i = 0; i < formControls.length; i++) {
            if (!formControls[i] || formControls[i].length === 0) {
                return false;
            }
        }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('blogpost_title', blogpostTitle)
        formData.append('blogpost_body', blogpostBody)
        formData.append('blogpost_preview', blogpostPreview)
        formData.append('blogpost_album_art', blogpostAlbumArt)
        formData.append('blogpost_map', blogpostMap)

        for (let [key, value] of Object.entries(blogpostFiles)) {
            if (value) {
                formData.append('blogpost_photos[]', value);
                formData.append('blogpost_filenames[]', JSON.stringify({
                    id: key,
                    value: value.name
                }));
            }

        }

        for (let [key, value] of Object.entries(blogpostCaptions)) {
            if (value) {
                formData.append('blogpost_captions[]', JSON.stringify({
                    id: key,
                    value: value
                }));
            }

        }

        http.post('blogpost', formData)
            .then((res) => {
                navigate(`/blogpost/${res.data.id}`)
            })
            .catch((err) => console.log(err))
    }

    const handleCaptionChange = (event) => {
        const id = Number(event.target.id.split('_')[0]);

        setBlogpostCaptions((prev) => {
            const p = { ...prev };
            p[id] = event.target.value;
            return p;
        })
    }

    const handleAlbumArtChange = (event) => {
        const file = event.target.files[0];
        setBlogpostAlbumArt(file);
        document.getElementById('blogpost_album_art_div').innerText = file.name;
    }

    const handleMapChange = (event) => {
        const file = event.target.files[0];
        setBlogpostMap(file);
        document.getElementById('blogpost_map_div').innerText = file.name;
    }

    const removeMap = (event) => {
        event.preventDefault();
        setBlogpostMap(null);
        document.getElementById('blogpost_map_div').innerText = '';
    }

    const removeAlbumArt = (event) => {
        event.preventDefault();
        setBlogpostAlbumArt(null);
        document.getElementById('blogpost_album_art_div').innerText = '';
    }

    const handleAlbumArtClick = (event) => {
        event.preventDefault();
        albumArtRef.current.click();
    }

    const handleMapClick = (event) => {
        event.preventDefault();
        mapRef.current.click();
    }


    return (
        <div>
            <form className="new-post-form">
                <StringInput controlName={'blogpost_title'} myLabel={'Title:'} value={blogpostTitle} onChange={(e) => setBlogpostTitle(e.target.value)} />
                <TextareaInput controlName={'blogpost_preview'} myLabel={'Preview:'} value={blogpostPreview} onChange={(e) => setBlogpostPreview(e.target.value)} />
                <Editor handleEditorChange={handleEditor} value={blogpostBody} label={'Post Body:'} />

                <div className="file-input-list-container">
                    <input ref={albumArtRef} id={'blogpost_album_art'} type='file' name='blogpost_album_art' onChange={handleAlbumArtChange} className="file-input" />
                    <div>Album Cover Art:</div>
                    <div className="file-upload">
                        <button className="upload-btn" onClick={handleAlbumArtClick}>Select File</button>
                        <div id="blogpost_album_art_div" className="blogpost_photo_filename"></div>
                        <button onClick={removeAlbumArt}>Clear</button>
                    </div>
                </div>
                <div className="file-input-list-container">
                    <input ref={mapRef} id={'blogpost_map'} type='file' name='blogpost_map' onChange={handleMapChange} className="file-input" />
                    <div>Map Photo:</div>
                    <div className="file-upload">
                        <button className="upload-btn" onClick={handleMapClick}>Select File</button>
                        <div id="blogpost_map_div" className="blogpost_photo_filename"></div>
                        <button onClick={removeMap}>Clear</button>
                    </div>
                </div>

                <br></br>

                <div className="file-input-list-container">
                    <div>Blog Photos:</div>
                    <FileInputList onCaptionChange={handleCaptionChange} removeFile={removeFile} inputIds={inputIdArray} handleFileChange={handleFileChange} />
                </div>
                <SubmitButton id='new-post-btn' action={'Create New Post'} onSubmit={handleSubmit} valid={formIsValid} />
            </form>
        </div>
    )
}
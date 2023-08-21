import React, { useState, useEffect, useRef } from "react";
import './css/NewBlogpost.css'
import StringInput from "../partials/forms/inputs/String.input";
import http from '../../utils/http/httpConfig'
import Editor from "../partials/forms/inputs/Editor";
import TextareaInput from "../partials/forms/inputs/Textarea.input";
import SubmitButton from "../partials/buttons/SubmitButton";
import { useNavigate } from "react-router-dom";


export default function NewBlogpost() {
    const navigate = useNavigate();
    const [formIsValid, setFormIsValid] = useState(true);


    const [blogpostAlbum1Rank, setBlogpostAlbum1Rank] = useState('');
    const [blogpostAlbum2Rank, setBlogpostAlbum2Rank] = useState('');
    const [blogpostTitle, setBlogpostTitle] = useState('');
    const [blogpostIntro, setBlogpostIntro] = useState('');
    const [blogpostReview1, setBlogpostReview1] = useState('');
    const [blogpostReview2, setBlogpostReview2] = useState('');
    const [blogpostHeroPhoto, setBlogpostHeroPhoto] = useState('');
    const [blogpostHeroPhotoCaption, setBlogpostHeroPhotoCaption] = useState('');
    const [blogpostAlbumArt1, setBlogpostAlbumArt1] = useState('');
    const [blogpostAlbumArt2, setBlogpostAlbumArt2] = useState('');

    const [blogpostAlbumArt1Title, setBlogpostAlbumArt1Title] = useState("");
    const [blogpostAlbumArt1Band, setBlogpostAlbumArt1Band] = useState("");
    const [blogpostAlbumArt1ReleaseDate, setBlogpostAlbumArt1ReleaseDate] = useState("");
    const [blogpostAlbumArt1ChartPosition, setBlogpostAlbumArt1ChartPosition] = useState("");

    const [blogpostAlbumArt2Title, setBlogpostAlbumArt2Title] = useState("");
    const [blogpostAlbumArt2Band, setBlogpostAlbumArt2Band] = useState("");
    const [blogpostAlbumArt2ReleaseDate, setBlogpostAlbumArt2ReleaseDate] = useState("");
    const [blogpostAlbumArt2ChartPosition, setBlogpostAlbumArt2ChartPosition] = useState("");

    const [blogpostMapSteps, setBlogpostMapSteps] = useState(0);
    const [blogpostMapMiles, setBlogpostMapMiles] = useState(0);
    const [blogpostMapHours, setBlogpostMapHours] = useState(0);
    const [blogpostMapMinutes, setBlogpostMapMinutes] = useState(0);

    const [blogpostMap, setBlogpostMap] = useState('');
    const [blogpostCouldaShouldaAlbumArt1, setBlogpostCouldaShouldaAlbumArt1] = useState('');
    const [blogpostCouldaShouldaAlbumArt2, setBlogpostCouldaShouldaAlbumArt2] = useState('');
    const [blogpostCouldaShoulda1Title, setBlogpostCouldaShoulda1Title] = useState("");
    const [blogpostCouldaShoulda1Body, setBlogpostCouldaShoulda1Body] = useState("");
    const [blogpostCouldaShoulda2Title, setBlogpostCouldaShoulda2Title] = useState("");
    const [blogpostCouldaShoulda2Body, setBlogpostCouldaShoulda2Body] = useState("");

    const blogpostHeroPhotoRef = useRef(null);
    const blogpostAlbumArt1Ref = useRef(null);
    const blogpostAlbumArt2Ref = useRef(null);
    const blogpostMapRef = useRef(null);
    const blogpostCouldaShouldaAlbumArt1Ref = useRef(null);
    const blogpostCouldaShouldaAlbumArt2Ref = useRef(null);


    // const formControls = [blogpostTitle, blogpostBody, blogpostPreview, blogpostFiles, blogpostCaptions, blogpostAlbumArt];

    // const handleFileChange = (event) => {
    //     const id = Number(event.target.id.split('_')[0]);
    //     setBlogpostFiles((prev) => {
    //         let o = { ...prev };
    //         o[id] = event.target.files[0];
    //         return o;
    //     });
    //     document.getElementById(`${id}_blogpost_photo_filename`).innerText = event.target.files[0].name
    // }



    // const removeFile = (e) => {
    //     e.preventDefault();
    //     const id = Number(e.target.id.split('_')[0]);
    //     setBlogpostFiles((prev) => {
    //         let o = { ...prev };
    //         o[id] = null;
    //         return o;
    //     })
    //     document.getElementById(`${id}_blogpost_photo_filename`).innerText = '';
    // }

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

    // useEffect(() => {
    //     setFormIsValid(checkFormValidity());
    // }, formControls)

    // const checkFormValidity = () => {
    //     for (let i = 0; i < formControls.length; i++) {
    //         if (!formControls[i] || formControls[i].length === 0) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {};
        const formData = new FormData();
        formData.append('blogpost_album_1_rank', blogpostAlbum1Rank)
        formData.append('blogpost_album_2_rank', blogpostAlbum2Rank)
        formData.append('blogpost_title', blogpostTitle)
        formData.append('blogpost_intro', blogpostIntro)
        formData.append('blogpost_review_1', blogpostReview1)
        formData.append('blogpost_review_2', blogpostReview2)

        formData.append('blogpost_hero_photo', blogpostHeroPhoto)
        formData.append('blogpost_hero_photo_caption', blogpostHeroPhotoCaption)

        formData.append('blogpost_album_art_1', blogpostAlbumArt1)
        formData.append('blogpost_album_art_2', blogpostAlbumArt2)
        formData.append('blogpost_coulda_shoulda_album_art_1', blogpostCouldaShouldaAlbumArt1)
        formData.append('blogpost_coulda_shoulda_album_art_2', blogpostCouldaShouldaAlbumArt2)
        formData.append('blogpost_map', blogpostMap)

        formData.append('blogpost_album_art_1_details', JSON.stringify(
            {
                title: blogpostAlbumArt1Title,
                band: blogpostAlbumArt1Band,
                releaseDate: blogpostAlbumArt1ReleaseDate,
                chartPosition: blogpostAlbumArt1ChartPosition
            }
        ))

        formData.append('blogpost_album_art_2_details', JSON.stringify(
            {
                title: blogpostAlbumArt2Title,
                band: blogpostAlbumArt2Band,
                releaseDate: blogpostAlbumArt2ReleaseDate,
                chartPosition: blogpostAlbumArt2ChartPosition
            }
        ))

        formData.append('blogpost_map_details', JSON.stringify(
            {
                steps: Number(blogpostMapSteps),
                miles: Number(blogpostMapMiles),
                hours: Number(blogpostMapHours),
                minutes: Number(blogpostMapMinutes)
            }
        ))

        formData.append('blogpost_coulda_shoulda_1_details', JSON.stringify(
            {
                title: blogpostCouldaShoulda1Title,
                body: blogpostCouldaShoulda1Body
            }
        ))

        formData.append('blogpost_coulda_shoulda_2_details', JSON.stringify(
            {
                title: blogpostCouldaShoulda2Title,
                body: blogpostCouldaShoulda2Body
            }
        ))

        http.post('admin/blogpost', formData)
            .then((res) => {
                navigate(`/admin`)
            })
            .catch((err) => console.log(err))

    }

    /**
     * album art 1
     */
    const handleAlbumArt1Click = (event) => {
        event.preventDefault();
        blogpostAlbumArt1Ref.current.click();
    }

    const handleAlbumArt1Change = (event) => {
        event.preventDefault();
        const newPhoto = event.target.files[0];
        setBlogpostAlbumArt1(newPhoto);
        document.getElementById("div-album-art-1").innerText = newPhoto.name;
    }

    const removeAlbumArt1 = (event) => {
        event.preventDefault();
        setBlogpostAlbumArt1("");
        document.getElementById("div-album-art-1").innerText = "";
    }

    /**
     * album art 2
     */
    const handleAlbumArt2Click = (event) => {
        event.preventDefault();
        blogpostAlbumArt2Ref.current.click();
    }

    const handleAlbumArt2Change = (event) => {
        event.preventDefault();
        const newPhoto = event.target.files[0];
        setBlogpostAlbumArt2(newPhoto);
        document.getElementById("div-album-art-2").innerText = newPhoto.name;
    }

    const removeAlbumArt2 = (event) => {
        event.preventDefault();
        setBlogpostAlbumArt2("");
        document.getElementById("div-album-art-2").innerText = "";
    }

    /**
     * coulda shoulda album art 1
     */
    const handleCouldaShouldaAlbumArt1Click = (event) => {
        event.preventDefault();
        blogpostCouldaShouldaAlbumArt1Ref.current.click();
    }

    const handleCouldaShouldaAlbumArt1Change = (event) => {
        event.preventDefault();
        const newPhoto = event.target.files[0];
        setBlogpostCouldaShouldaAlbumArt1(newPhoto);
        document.getElementById("div-coulda-shoulda-album-art-1").innerText = newPhoto.name;
    }

    const removeCouldaShouldaAlbumArt1 = (event) => {
        event.preventDefault();
        setBlogpostCouldaShouldaAlbumArt1("");
        document.getElementById("div-coulda-shoulda-album-art-1").innerText = "";
    }

    /**
      * coulda shoulda album art 2
      */
    const handleCouldaShouldaAlbumArt2Click = (event) => {
        event.preventDefault();
        blogpostCouldaShouldaAlbumArt2Ref.current.click();
    }

    const handleCouldaShouldaAlbumArt2Change = (event) => {
        event.preventDefault();
        const newPhoto = event.target.files[0];
        setBlogpostCouldaShouldaAlbumArt2(newPhoto);
        document.getElementById("div-coulda-shoulda-album-art-2").innerText = newPhoto.name;
    }

    const removeCouldaShouldaAlbumArt2 = (event) => {
        event.preventDefault();
        setBlogpostCouldaShouldaAlbumArt2("");
        document.getElementById("div-coulda-shoulda-album-art-2").innerText = "";
    }

    /**
      * hero photo
      */
    const handleHeroPhotoClick = (event) => {
        event.preventDefault();
        blogpostHeroPhotoRef.current.click();
    }

    const handleHeroPhotoChange = (event) => {
        event.preventDefault();
        const newPhoto = event.target.files[0];
        setBlogpostHeroPhoto(newPhoto);
        document.getElementById("div-hero-photo").innerText = newPhoto.name;
    }

    const removeHeroPhoto = (event) => {
        event.preventDefault();
        setBlogpostHeroPhoto("");
        document.getElementById("div-hero-photo").innerText = "";
    }

    /**
      * map photo
      */
    const handleMapClick = (event) => {
        event.preventDefault();
        blogpostMapRef.current.click();
    }

    const handleMapChange = (event) => {
        event.preventDefault();
        const newPhoto = event.target.files[0];
        setBlogpostMap(newPhoto);
        document.getElementById("div-map-photo").innerText = newPhoto.name;
    }

    const removeMap = (event) => {
        event.preventDefault();
        setBlogpostMap("");
        document.getElementById("div-map-photo").innerText = "";
    }




    return (
        <div className="new-post-container">
            <div className="new-post-padding"></div>
            <form className="new-post-form">
                <StringInput controlName={'blogpost_title'} myLabel={'Title:'} value={blogpostTitle} onChange={(e) => setBlogpostTitle(e.target.value)} />
                <Editor handleEditorChange={handleEditorIntro} value={blogpostIntro} label={'Intro:'} />
                <Editor handleEditorChange={handleEditorReview1} value={blogpostReview1} label={'Review 1:'} />
                <Editor handleEditorChange={handleEditorReview2} value={blogpostReview2} label={'Review 2:'} />

                <div className="file-input-list-container">
                    <input ref={blogpostHeroPhotoRef} id={'input-hero-photo'} type='file' name='blogpost_hero_photo' onChange={handleHeroPhotoChange} className="file-input" />
                    <div>Hero Photo:</div>
                    <div className="file-upload">
                        <button id="btn-hero-photo" className="upload-btn" onClick={handleHeroPhotoClick}>Select File</button>
                        <div id="div-hero-photo" className="blogpost_photo_filename"></div>
                        <button onClick={removeHeroPhoto} >Clear</button>
                    </div>
                </div>
                <TextareaInput controlName={'blogpost_hero_photo_caption'} myLabel={'Caption:'} onChange={(e) => setBlogpostHeroPhotoCaption(e.target.value)} />

                <hr></hr>
                <div className="file-input-list-container">
                    <input ref={blogpostAlbumArt1Ref} id={'input-album-art-1'} type='file' name='blogpost_album_art_1' onChange={handleAlbumArt1Change} className="file-input" />
                    <div>Review 1 Album Art:</div>
                    <div className="file-upload">
                        <button id="btn-album-art-1" className="upload-btn" onClick={handleAlbumArt1Click}>Select File</button>
                        <div id="div-album-art-1" className="blogpost_photo_filename"></div>
                        <button onClick={removeAlbumArt1} >Clear</button>
                    </div>
                </div>

                <div>
                    <label htmlFor="album-art-1-title">Album 1 Title</label>
                    <input id="album-art-1-title" onChange={(e) => setBlogpostAlbumArt1Title(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="album-art-1-rank">Album 1 Rank</label>
                    <input id="album-art-1-rank" onChange={(e) => setBlogpostAlbum1Rank(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="album-art-1-band">Album 1 Band</label>
                    <input id="album-art-1-band" onChange={(e) => setBlogpostAlbumArt1Band(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="album-art-1-release-date">Album 1 Release Date</label>
                    <input id="album-art-1-release-date" onChange={(e) => setBlogpostAlbumArt1ReleaseDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="album-art-1-chart-position">Album 1 Chart Position</label>
                    <input id="album-art-1-chart-position" onChange={(e) => setBlogpostAlbumArt1ChartPosition(e.target.value)} />
                </div>

                <hr></hr>

                <div className="file-input-list-container">
                    <input ref={blogpostAlbumArt2Ref} id={'input-album-art-2'} type='file' name='blogpost_album_art_2' onChange={handleAlbumArt2Change} className="file-input" />
                    <div>Review 2 Album Art:</div>
                    <div className="file-upload">
                        <button id="btn-album-art-2" className="upload-btn" onClick={handleAlbumArt2Click}>Select File</button>
                        <div id="div-album-art-2" className="blogpost_photo_filename"></div>
                        <button onClick={removeAlbumArt2} >Clear</button>
                    </div>
                </div>

                <div>
                    <label htmlFor="album-art-2-title">Album 2 Title</label>
                    <input id="album-art-2-title" onChange={(e) => setBlogpostAlbumArt2Title(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="album-art-2-rank">Album 2 Rank</label>
                    <input id="album-art-2-rank" onChange={(e) => setBlogpostAlbum2Rank(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="album-art-2-band">Album 2 Band</label>
                    <input id="album-art-2-band" onChange={(e) => setBlogpostAlbumArt2Band(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="album-art-2-release-date">Album 2 Release Date</label>
                    <input id="album-art-2-release-date" onChange={(e) => setBlogpostAlbumArt2ReleaseDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="album-art-2-chart-position">Album 2 Chart Position</label>
                    <input id="album-art-2-chart-position" onChange={(e) => setBlogpostAlbumArt2ChartPosition(e.target.value)} />
                </div>

                <hr></hr>



                <div className="file-input-list-container">
                    <input ref={blogpostCouldaShouldaAlbumArt1Ref} id={'input-coulda-shoulda-album-art-1'} type='file' name='blogpost_coulda-shoulda-album_art_1' onChange={handleCouldaShouldaAlbumArt1Change} className="file-input" />
                    <div>Coulda Shoulda 1 Album Art:</div>
                    <div className="file-upload">
                        <button id="btn-coulda-shoulda-album-art-1" className="upload-btn" onClick={handleCouldaShouldaAlbumArt1Click}>Select File</button>
                        <div id="div-coulda-shoulda-album-art-1" className="blogpost_photo_filename"></div>
                        <button onClick={removeCouldaShouldaAlbumArt1} >Clear</button>
                    </div>
                </div>
                <StringInput controlName={'blogpost_coulda-shoulda-1-title'} myLabel={'Coulda Shoulda 1 Title:'} value={blogpostCouldaShoulda1Title} onChange={(e) => setBlogpostCouldaShoulda1Title(e.target.value)} />
                <Editor handleEditorChange={handleEditorCouldaWoulda1Body} value={blogpostCouldaShoulda1Body} label={'Coulda Shoulda 1 Title:'} />
                <hr></hr>
                <div className="file-input-list-container">
                    <input ref={blogpostCouldaShouldaAlbumArt2Ref} id={'input-coulda-shoulda-album-art-2'} type='file' name='blogpost_coulda-shoulda-album_art_2' onChange={handleCouldaShouldaAlbumArt2Change} className="file-input" />
                    <div>Coulda Shoulda 2 Album Art:</div>
                    <div className="file-upload">
                        <button id="btn-coulda-shoulda-album-art-2" className="upload-btn" onClick={handleCouldaShouldaAlbumArt2Click}>Select File</button>
                        <div id="div-coulda-shoulda-album-art-2" className="blogpost_photo_filename"></div>
                        <button onClick={removeCouldaShouldaAlbumArt2} >Clear</button>
                    </div>
                </div>
                <StringInput controlName={'blogpost_coulda-shoulda-2-title'} myLabel={'Coulda Shoulda 2 Title:'} value={blogpostCouldaShoulda2Title} onChange={(e) => setBlogpostCouldaShoulda2Title(e.target.value)} />
                <Editor handleEditorChange={handleEditorCouldaWoulda2Body} value={blogpostCouldaShoulda2Body} label={'Coulda Shoulda 2 Body:'} />
                <hr></hr>
                <div className="file-input-list-container">
                    <input ref={blogpostMapRef} id={'input-map'} type='file' name='blogpost_map' onChange={handleMapChange} className="file-input" />
                    <div>Map Photo:</div>
                    <div className="file-upload">
                        <button id="btn-map-photo" className="upload-btn" onClick={handleMapClick}>Select File</button>
                        <div id="div-map-photo" className="blogpost_photo_filename"></div>
                        <button onClick={removeMap} >Clear</button>
                    </div>
                </div>
                <div>
                    <label htmlFor="map-steps">Steps</label>
                    <input type="number" id="map-steps" onChange={(e) => setBlogpostMapSteps(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="map-miles">Miles</label>
                    <input type="number" id="map-miles" onChange={(e) => setBlogpostMapMiles(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="map-hours">Hours</label>
                    <input type="number" id="map-hours" onChange={(e) => setBlogpostMapHours(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="map-minutes">Minutes</label>
                    <input type="number" id="map-minutes" onChange={(e) => setBlogpostMapMinutes(e.target.value)} />
                </div>




                <br></br>


                <SubmitButton id='new-post-btn' action={'Create New Post'} onSubmit={handleSubmit} valid={formIsValid} />
            </form>
            <div className="new-post-padding"></div>

        </div>
    )
}
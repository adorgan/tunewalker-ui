import React, { useState, useEffect } from "react";
import './css/NewBlogpost.css'
import StringInput from "../partials/forms/inputs/String.input";
import http from '../../utils/http/httpConfig'
import Editor from "../partials/forms/inputs/Editor";
import { useNavigate, useLocation } from 'react-router-dom';


const EditBlogpost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const post = location.state.post;

    const [formData, setFormData] = useState({
        blogpost_title: post.blogpost_title,
        blogpost_body: post.blogpost_body
    })

    const [blogpostTitle, setBlogpostTitle] = useState(post.blogpost_title);
    const [formIsValid, setFormIsValid] = useState(false);

    function handleChange(event) {
        const newVale = event.target.value;
        const curForm = formData;
        curForm[event.target.name] = newVale;
        setFormData(curForm);
    }

    const handleEditor = (text) => {
        let value;
        if (text === '<p><br></p>') {
            value = '';
        }
        else {
            value = text;
        }

        setFormData(prevState => ({
            ...prevState,
            ['blogpost_body']: value
        }));
    }

    useEffect(() => {
        setFormIsValid(checkFormValidity(formData));
    }, [blogpostTitle])

    const checkFormValidity = (formData) => {
        const values = Object.values(formData);
        for (let i = 0; i < values.length; i++) {
            if (!values[i]) {
                return false;
            }
        }
        return true;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(blogpostTitle);
        // http.put(`/blogpost/${post._id}`, formData)
        //     .then((res) => navigate(`/blogpost/${post._id}`))
        //     .catch((err) => console.log(err))
    }


    return (


        <div>
            <Editor handleChange={handleEditor} value={post.blogpost_body} />
            <form className="new-post-form" onSubmit={handleSubmit}>
                <StringInput controlName={'blogpost_title'} myLabel={'Title'} value={blogpostTitle} onChange={(e) => setBlogpostTitle(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditBlogpost;
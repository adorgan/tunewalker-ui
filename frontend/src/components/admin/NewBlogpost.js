import React, { useState } from "react";
import axios from "axios";
import './css/NewBlogpost.css'
import StringInput from "../partials/forms/inputs/string.input";
import TextareaInput from "../partials/forms/inputs/textarea.input";
import Editor from "../partials/forms/inputs/editor";
import BlogEditor from "../partials/forms/inputs/editor";


export default function NewBlogpost() {

    const [formData, setFormData] = useState({
        blogpost_title: null,
        blogpost_body: null
    })

    function handleChange(event) {
        const newVale = event.target.value;
        const curForm = formData;
        curForm[event.target.name] = newVale;
        setFormData(curForm);
    }

    function handleEditor(e) {
        console.log(e);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        // axios.post('http://localhost:4000/blogpost', formData)
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))
    }

    return (
        

        <div>
            <BlogEditor  handleChange={handleEditor} value={'<p>asdfasdf</p>'}/>
            <form className="new-post-form" onSubmit={handleSubmit}>
                <StringInput controlName={'blogpost_title'} myLabel={'Title'} onChange={handleChange} />
                <TextareaInput controlName={'blogpost_body'} myLabel={'Body'} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
import React, { useState } from "react";
import axios from "axios";

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

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:4000/blogpost', formData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="blogpost_title" onChange={handleChange} />
                </label>
                <label>
                    Body:
                    <textarea type="text" name="blogpost_body" onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
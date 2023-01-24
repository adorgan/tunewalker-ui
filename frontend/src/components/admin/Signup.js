import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: null,
        password: null
    })

    function handleChange(event) {
        const newVale = event.target.value;
        const curForm = formData;
        curForm[event.target.name] = newVale;
        setFormData(curForm);
    }

    function handleSubmit() {
        console.log(formData);
        axios.post('http://localhost:4000/admin/signup', formData)
        .then((res) => {
            navigate('/login');
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password"  onChange={handleChange} />
                </label>
            </form>
            <button onClick={handleSubmit}>Signup</button>
        </div>
    )
}
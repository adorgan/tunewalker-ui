import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import http from "../../utils/http/httpConfig";
import './css/Signup.css'


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
        http.post('/admin/signup', formData)
        .then(() => {
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
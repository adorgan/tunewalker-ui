import axios from "axios";
import React, {useState} from "react";

export default function Login() {

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
        axios.post('http://localhost:4000/admin/login', formData)
        .then((res) => console.log(res))
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
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}
import React, {useContext, useEffect, useState} from "react";
import http from "../../utils/http/httpConfig";
import { useNavigate } from "react-router-dom";
import './css/Login.css'
import AdminContext from "../../utils/contexts/admin-context";

export default function Login() {
    const navigate = useNavigate();
    const {isAdmin, setIsAdmin} = useContext(AdminContext);

    const [formData, setFormData] = useState({
        username: null,
        password: null
    })

    function handleChange(event) {
        const newVal = event.target.value;
        const curForm = formData;
        curForm[event.target.name] = newVal;
        setFormData(curForm);
    }
    function handleSubmit() {
        http.post('/admin/login', formData)
        .then((res) => {
            sessionStorage.setItem('token', res.data.token)
            setIsAdmin(true);
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        if(isAdmin){
            navigate('/admin');
        }
    }, [isAdmin])


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
import React, { useContext, useEffect, useState } from "react";
import http from "../../utils/http/httpConfig";
import { useNavigate } from "react-router-dom";
import './css/Login.css'
import AdminContext from "../../utils/contexts/admin-context";
import { TailSpin } from 'react-loader-spinner'

export default function Login() {
    const navigate = useNavigate();
    const { isAdmin, setIsAdmin } = useContext(AdminContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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
    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(false);
        http.post('/auth/login', formData)
            .then((res) => {
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('username', res.data.username)
                sessionStorage.setItem('refreshToken', res.data.refreshToken)
                setIsAdmin(true);
            })
            .catch((err) => {
                setLoading(false)
                setError(true);
                console.log(err)
            })
    }

    useEffect(() => {
        if (isAdmin) {
            navigate('/admin');
        }
    }, [isAdmin])


    return (
        <div className="login-container">
            <form className={"login-form " + (loading ? "login-blur" : "")} onSubmit={handleSubmit}>
                <label className="login-form-label">
                    Username
                </label>
                <input className="login-form-input" type="text" name="username" onChange={handleChange} />
                <br></br>
                <label className="login-form-label">
                    Password
                </label>
                <input className="login-form-input" type="password" name="password" onChange={handleChange} />
                <button type="submit" className="login-btn">Login</button>
                {error &&
                    <div className="login-error-msg">
                        *Invalid Credentials*
                    </div>
                }

            </form>
            {loading &&
                <div className="login-spinner-container">
                    <TailSpin
                        height="60"
                        width="60"
                        color="#dc1b1b"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>


            }

        </div>
    )
}
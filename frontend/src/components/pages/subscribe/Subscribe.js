import React, { useState } from "react";
import './css/Subscribe.css';
import http from "../../../utils/http/httpConfig";
import ActionButton from "../../partials/buttons/ActionButton";
import ReCAPTCHA from "react-google-recaptcha";

const Subscribe = () => {

    const recaptchaRef = React.createRef();
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);


    const handleSubscribe = (e) => {
        e.preventDefault();
        setEmailSuccess(false);
        setEmailError(false);
        const payload = {};
        payload['reCaptcha'] = recaptchaRef.current.getValue();
        payload['email'] = document.getElementById('subscribe-email').value;
        http.post("/admin/subscribe", payload)
            .then((res) => {
                setEmailSuccess(true);
                document.getElementById('subscribe-email').value = '';

            })
            .catch((err) => {
                console.log(err);
                setEmailError(true);
            })
            .finally(() => {
                window.grecaptcha.reset();
            })

    }

    return (
        <div className="subscribe-container">
            <form onSubmit={handleSubscribe} className="subscribe-form">
                <label className="subscribe-form-label">
                    Get email notifications for new posts
                </label>
                <input id="subscribe-email" placeholder="Enter email" className="subscribe-form-input" type="email" name="email" />
                <ReCAPTCHA
                    className="subscribe-recaptcha"
                    ref={recaptchaRef}
                    sitekey="6LdGE6klAAAAAKEbtPSRac5f3wMePtGqeWJpBzwX">
                </ReCAPTCHA>
                <div className="subscribe-btn-container">
                    <button className="subscribe-submit-btn" type="submit">Subscribe</button>
                </div>
                {emailSuccess &&
                    <div className="subscribe-email-success-msg">Email subscription successful</div>
                }
                {emailError &&
                    <div className="subscribe-email-error-msg">Error: please try again.</div>
                }
            </form>
        </div>
    )

}

export default Subscribe;
import React from "react";
import './css/Footer.css';
import { Link } from "react-router-dom";
import './css/Footer.css';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-podwalker-container">
                <Link to={'https://www.thepodwalker.com'} >The Podwalker</Link>
            </div>
            <div className="footer-made-with">
                {'Made with <3 in Colorado Springs'}
            </div>
        </div>
    )

}

export default Footer;
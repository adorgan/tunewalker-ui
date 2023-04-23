import React from "react";
import './css/AboveHeader.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const AboveHeader = () => {
    const navigate = useNavigate();




    return (
        <div className='above-header'>
            <div className='above-header-title' onClick={() => navigate('/')}>
                The Tune Wal<img className="header-icon" src="tunewalker2.svg"></img>er
            </div>
            <div className="above-header-right" >
                <div className="above-header-icon-btn">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <Link to={`/subscribe`}>SUBSCRIBE</Link>
                </div>

            </div>
        </div>
    )
}

export default AboveHeader;
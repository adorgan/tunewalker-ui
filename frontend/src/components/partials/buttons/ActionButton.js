import React from "react";
import './css/ActionButton.css';

const ActionButton = ({title, onClick}) => {

    return(
        <div className="action-btn-container">
            <button onClick={onClick} className="action-btn">{title}</button>
        </div>
    )

}

export default ActionButton;
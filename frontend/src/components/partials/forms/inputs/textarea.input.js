import React from "react";
import './css/textarea.input.css';

const TextareaInput = ({ controlName, myLabel, onChange }) => {

    return (
        <div className="textarea-input-container">
            <label htmlFor={controlName}>{myLabel}</label>
            <textarea id={controlName} name={controlName} onChange={onChange} />
        </div>
    )

}

export default TextareaInput;
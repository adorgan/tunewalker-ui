import React from "react";
import './css/Textarea.input.css';

const TextareaInput = ({ controlName, myLabel, onChange }) => {

    return (
        <div className="textarea-input-container">
            <label htmlFor={controlName}>{myLabel}</label>
            <textarea id={controlName} name={controlName} onChange={onChange} rows={5} />
        </div>
    )

}

export default TextareaInput;
import React from "react";
import './css/string.input.css';

const StringInput = ({ controlName, type = 'text', myLabel, onChange, value }) => {

    return (
        <div className="string-input-container">
            <label htmlFor={controlName}>{myLabel}</label>
            <input id={controlName} type={type} value={value} name={controlName} onChange={onChange} />
        </div>
    )

}

export default StringInput;
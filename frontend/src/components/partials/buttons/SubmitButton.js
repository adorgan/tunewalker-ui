import React, {useEffect} from "react";
import './css/SubmitButton.css';

const SubmitButton = ({action, onSubmit, valid=false, id}) => {

    useEffect(() => {
        const btn = document.getElementById(id);
        if(valid){
            btn.disabled = false;
        }
        else{
            btn.disabled = true;
        }
    }, [valid])


    return(
        <button id={id} className="submit-btn" onClick={onSubmit}>{action}</button>
    )
}

export default SubmitButton;
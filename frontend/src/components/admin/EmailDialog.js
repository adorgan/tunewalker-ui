import React from "react";
import ActionButton from "../partials/buttons/ActionButton";
import './css/DeleteDialog.css';

const EmailDialog = ({onHideModal, onSend}) => {

    return(
        <div className="delete-dialog-container">
            <div className="delete-dialog-header">Are you sure you want to send email notifications?</div>
            <div className="delete-dialog-btn-container">
                <ActionButton title={'Cancel'} onClick={onHideModal}></ActionButton>
                <ActionButton title={'Send'} onClick={onSend}></ActionButton>
            </div>
        </div>
    )

}

export default EmailDialog;
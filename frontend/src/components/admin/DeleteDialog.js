import React from "react";
import ActionButton from "../partials/buttons/ActionButton";
import './css/DeleteDialog.css';

const DeleteDialog = ({onHideModal, onDelete}) => {

    return(
        <div className="delete-dialog-container">
            <div className="delete-dialog-header">Are you sure you want to delete?</div>
            <div className="delete-dialog-btn-container">
                <ActionButton title={'Cancel'} onClick={onHideModal}></ActionButton>
                <ActionButton title={'Delete'} onClick={onDelete}></ActionButton>
            </div>
        </div>
    )

}

export default DeleteDialog;
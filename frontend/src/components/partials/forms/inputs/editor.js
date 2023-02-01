import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './css/Editor.css'

const Editor = ({ value, handleEditorChange, label }) => {

    return (
        <div className="editor-container">
            <div>{label}</div>
            <ReactQuill theme="snow" value={value} onChange={handleEditorChange} />
        </div>
    )
}

export default Editor;
import React, { useEffect, useRef } from "react";
import TextareaInput from "../partials/forms/inputs/Textarea.input";
import './css/FileInputList.css'

const FileInputList = ({ handleFileChange, removeFile, onCaptionChange }) => {

    const hiddenFileInput1 = useRef(null);
    const hiddenFileInput2 = useRef(null);
    const hiddenFileInput3 = useRef(null);
    const hiddenFileInput4 = useRef(null);
    const hiddenFileInput5 = useRef(null);
    // const hiddenFileInput6 = useRef(null);
    // const hiddenFileInput7 = useRef(null);
    // const hiddenFileInput8 = useRef(null);
    // const hiddenFileInput9 = useRef(null);
    // const hiddenFileInput10 = useRef(null);

    const handleClick = (event) => {
        event.preventDefault();
        switch (event.target.id.split('_')[0]) {
            case '1': {
                hiddenFileInput1.current.click();
                break;
            }
            case '2': {
                hiddenFileInput2.current.click();
                break;
            }
            case '3': {
                hiddenFileInput3.current.click();
                break;
            }
            case '4': {
                hiddenFileInput4.current.click();
                break;
            }
            case '5': {
                hiddenFileInput5.current.click();
                break;
            }
        }
    }


    return <>
        <div key='input_1'>
            <input ref={hiddenFileInput1} id={'1_blogpost_photo'} type='file' name='blogpost_photos' onChange={handleFileChange} className="file-input" />
            <div className="file-upload">
                <button id={'1_blogpost_photo_add_btn'} className="upload-btn" onClick={handleClick}>Select File</button>
                <div id={'1_blogpost_photo_filename'} className="blogpost_photo_filename"></div>
                <button id={'1_blogpost_photo_remove_button'} onClick={removeFile}>Clear</button>
            </div>
            <TextareaInput controlName={'1_caption'} myLabel={'Caption:'} onChange={onCaptionChange} />
        </div >

        <div key='input_2'>
            <input ref={hiddenFileInput2} id={'2_blogpost_photo'} type='file' name='blogpost_photos' onChange={handleFileChange} className="file-input" />
            <div className="file-upload">
                <button id={'2_blogpost_photo_add_btn'} className="upload-btn" onClick={handleClick}>Select File</button>
                <div id={'2_blogpost_photo_filename'} className="blogpost_photo_filename"></div>
                <button id={'2_blogpost_photo_remove_button'} onClick={removeFile}>Clear</button>
            </div>
            <TextareaInput controlName={'2_caption'} myLabel={'Caption:'} onChange={onCaptionChange} />
        </div >

        <div key='input_3'>
            <input ref={hiddenFileInput3} id={'3_blogpost_photo'} type='file' name='blogpost_photos' onChange={handleFileChange} className="file-input" />
            <div className="file-upload">
                <button id={'3_blogpost_photo_add_btn'} className="upload-btn" onClick={handleClick}>Select File</button>
                <div id={'3_blogpost_photo_filename'} className="blogpost_photo_filename"></div>
                <button id={'3_blogpost_photo_remove_button'} onClick={removeFile}>Clear</button>
            </div>
            <TextareaInput controlName={'3_caption'} myLabel={'Caption:'} onChange={onCaptionChange} />
        </div >

        <div key='input_4'>
            <input ref={hiddenFileInput4} id={'4_blogpost_photo'} type='file' name='blogpost_photos' onChange={handleFileChange} className="file-input" />
            <div className="file-upload">
                <button id={'4_blogpost_photo_add_btn'} className="upload-btn" onClick={handleClick}>Select File</button>
                <div id={'4_blogpost_photo_filename'} className="blogpost_photo_filename"></div>
                <button id={'4_blogpost_photo_remove_button'} onClick={removeFile}>Clear</button>
            </div>
            <TextareaInput controlName={'4_caption'} myLabel={'Caption:'} onChange={onCaptionChange} />
        </div >

        <div key='input_5'>
            <input ref={hiddenFileInput5} id={'5_blogpost_photo'} type='file' name='blogpost_photos' onChange={handleFileChange} className="file-input" />
            <div className="file-upload">
                <button id={'5_blogpost_photo_add_btn'} className="upload-btn" onClick={handleClick}>Select File</button>
                <div id={'5_blogpost_photo_filename'} className="blogpost_photo_filename"></div>
                <button id={'5_blogpost_photo_remove_button'} onClick={removeFile}>Clear</button>
            </div>
            <TextareaInput controlName={'5_caption'} myLabel={'Caption:'} onChange={onCaptionChange} />
        </div >
    </>



}

export default FileInputList;
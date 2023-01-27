import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function BlogEditor({value, handleChange}) {
    // const [value, setValue] = useState('');
    // function logValue(val) {
    //     setValue(val);
    //     console.log(val);
    // }

    return <ReactQuill theme="snow" value={value} onChange={handleChange} />;
}
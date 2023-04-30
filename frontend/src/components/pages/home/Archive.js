import React from "react";
import BlogpostList from "./BlogpostList";
import "./css/Archive.css";

const Archive = () => {

    return (
        <div className="archive-container">
            <div className="archive-main-padding"></div>
            <div className="archive-main-content">
                <BlogpostList />
            </div>
            <div className="archive-main-padding"></div>
        </div>
    )

}

export default Archive;
import React from "react";
import './css/RollingStone.css';

const RollingStone = () => {

    const openLink = () => {
        window.open('https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/the-band-music-from-big-pink-2-1063133/', '_blank');
    }
    return (
        <div onClick={openLink} className="rolling-stone-container">
            <img src="/download.png"/>
            <div className="rolling-stone-title">Top 100 Albums of All Time</div>
            <img src="/rollingstone.jpg"/>
        </div>
    )

}

export default RollingStone;
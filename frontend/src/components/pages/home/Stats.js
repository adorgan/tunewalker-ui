import React, { useEffect, useState } from "react";
import "./css/Stats.css";
import http from "../../../utils/http/httpConfig";


const Stats = () => {

    const [totalMiles, setTotalMiles] = useState(0);
    const [totalHours, setTotalHours] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState(0);

    useEffect(() => {
        http.get('/blogpost/stats')
            .then((res) => {
                setTotalMiles(res.data.totalMiles);
                let curHours = res.data.totalHours;
                let curMinutes = res.data.totalMinutes;
                console.log(curHours, curMinutes);

                curHours += Math.floor(curMinutes / 60);
                curMinutes = curMinutes % 60;
                setTotalHours(curHours);
                setTotalMinutes(curMinutes);
            })
    })


    return (
        <div className="stats-container">
            <div className="stats-sidebar"></div>
            <div className="stats-content">
                <div className="stats-top-container">
                    <div className="stats-top-card">
                        Miles Walked: {totalMiles}
                    </div>
                    <div className="stats-top-card">
                        Hours Walked: {totalHours}
                    </div>

                    <div className="stats-top-card">
                        Minutes Walked: {totalMinutes}
                    </div>
                </div>
            </div>
            <div className="stats-sidebar"></div>
        </div>

    )

}

export default Stats;
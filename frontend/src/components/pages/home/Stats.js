import React, { useEffect, useState } from "react";
import "./css/Stats.css";
import http from "../../../utils/http/httpConfig";


const Stats = () => {

    const [totalMiles, setTotalMiles] = useState(0);
    const [totalHours, setTotalHours] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        http.get('/blogpost/stats')
            .then((res) => {
                setLoading(false);
                setTotalMiles(Math.round(Math.round(res.data.totalMiles * 100) / 100));
                let curHours = res.data.totalHours;
                let curMinutes = res.data.totalMinutes;

                curHours += Math.round(Math.floor(curMinutes / 60));
                curMinutes = curMinutes % 60;
                setTotalHours(curHours);
                setTotalMinutes(curMinutes);
            })
    }, [])

    


    return (
        <div className="stats-container">
            <div className="stats-sidebar"></div>
            <div className="stats-content">
                <div className="stats-top-container">
                    <div className="stats-card-container">
                        <div className="stats-top-card">
                            {totalMiles}
                        </div>
                        <div>Miles Walked</div>
                    </div>

                    <div className="stats-card-container">
                        <div className="stats-top-card">
                            {totalHours}:{totalMinutes < 10 ? '0' + totalMinutes : totalMinutes}
                        </div>
                        <div>Time Walked</div>
                    </div>
                </div>
            </div>
            <div className="stats-sidebar"></div>
        </div>

    )

}

export default Stats;
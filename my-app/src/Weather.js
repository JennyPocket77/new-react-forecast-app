import React from "react";
import "./Weather.css";

export default function Weather(){
    return <div className="Weather">
        <form>
            <div className="row mt-3">
                <div className="col-9">
            <input type="search" placeholder="Enter a City..." classname="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            
        </form>
        <h1>Boise</h1>
        <ul>
            <li>Wednesday 2:22pm</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
        <div className="col-6">
            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="Mostly Cloudy" />
            <span className="temperature">6</span>
            <span className="unit">°C</span>
            </div>
            <div className="col-6">
<ul>
    <li>Precipitation: 15%</li>
    <li>Humidity: 72%</li>
    <li>Wind: 13 km/hr</li>
</ul>
            </div>
        </div>
        </div>
}
import React from 'react';

import SunImg from "../../resources/images/sun.png";

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="weather-data">
                <div className="location">Location</div>
                <div className="inner-section">
                    <div className="image"><img src={SunImg} alt='sun graphic'></img></div>
                    <div className="temp">10°</div>
                </div>
                <div className="condition">Sunny</div>
            </div>
        );
    }
}
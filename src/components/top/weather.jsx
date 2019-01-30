import React from 'react';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        <div className="weather-data">
            <div className="location">Location</div>
            <div className="inner-section">
                <div className="image">IMAGE</div>
                <div className="temp">10</div>
            </div>
            <div className="condition">Sunny</div>
        </div>
    }
}
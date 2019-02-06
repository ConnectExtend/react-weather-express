import React from 'react';

// import SunImg from "../../resources/images/sun.png";

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location, temp_f, condition, iconURL } = this.props;

        return (
            <div className="weather-data">
                <div className="location">{location}</div>
                <div className="condition">{condition}</div>
                <div className="inner-section">
                    <div className="image"><img src={iconURL} alt='' /></div>
                    <div className="temp">{temp_f}°<small>F</small></div>
                </div>
            </div>
        );
    }
}
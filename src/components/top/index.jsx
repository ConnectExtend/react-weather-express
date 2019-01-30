import React from 'react';

import './styles.scss'; 

import Weather from './weather.jsx';

export default class TopSection extends React.Component {
    constructor(props) {
        super(props);
        // 
        this.state = { };
    }

    render() {
        return (
        <div className='top-content'>
            <div className='title'>Weather Express</div>
            <Weather />
            <button className='btn btn-select-location'>Select Location</button>
        </div>
        );
    }
}

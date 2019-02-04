import React, { Component } from 'react';
import './App.css';

import "./sass/app.scss";

import TopSection from './components/top/index.jsx';
import BottomSection from './components/bottom/index.jsx';

import axios from 'axios';

const WEATHER_KEY = 'c61d957551484d38859202359192601';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'Chicago',
      forecastDays: 5,
      isLoading: true
    };
  }
// making only one request to API which will be passed to top section and bottom section
  componentDidMount() {
    const { cityName, forecastDays } = this.state;

    const URL = `https://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${forecastDays}`;
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          isLoading: false,
          isDay: data.current.is_day, 
          iconURL: data.current.condition.icon, 
          temp_f: data.current.temp_f, 
          condition: data.current.condition.text 
        });
      })
      .catch(err => {
        if (err) 
          console.error('Cannot fetch Weather Data from API, ', err);
      });
  }

  render() {
    const { cityName, isDay, iconURL, temp_f, condition } = this.state;


    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section">
            <TopSection 
              location={cityName}
              isDay={isDay}
              iconURL={iconURL}
              temp_f={temp_f}
              condition={condition} 
            />
          </div>
          <div className="bottom-section">
            <BottomSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

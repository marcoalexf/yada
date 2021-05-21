import React from 'react';
import { WeatherContainer } from './features/weather/WeatherContainer'
import './App.css';
import './weather-icons/weather-icons-wind.min.css'
import './weather-icons/weather-icons.min.css'

function App() {
  return (
    <div className="App">
      { /* <NewsList /> */}
      <WeatherContainer />
    </div>
  );
}

export default App;

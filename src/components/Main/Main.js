import React from 'react';
import sunny from '../../img/Sunny.png';
import clear from '../../img/Clear.png';
import cloudy from '../../img/Cloudy.png';
import fog from '../../img/Fog.png';
import heavyRain from '../../img/Heavy rain.png';
import lightRainShower from '../../img/Light rain shower.png';
import lightRain from '../../img/Light rain.png';
import moderateOrHeavyRainShower from '../../img/Moderate or heavy rain shower .png';
import moderateOrHeavyRainWithThunder from '../../img/Moderate or heavy rain with thunder.png';
import moderateRainAtTimes from '../../img/Moderate rain at times.png';
import overcast from '../../img/Overcast.png';
import partlyCloudy from '../../img/Partly cloudy.png';
import patchyRainPossible from '../../img/Patchy rain possible.png';
import rain from '../../img/Rain.png';
import moderateRain from '../../img/Moderate rain.png';
import './style.css';

const imageMapping = {
  'Sunny': sunny,
  'Clear': clear,
  'Cloudy': cloudy,
  'Fog': fog,
  'Heavy rain': heavyRain, 
  'Light rain shower': lightRainShower,
  'Light rain': lightRain,
  'Moderate or heavy rain shower': moderateOrHeavyRainShower,  
  'Moderate or heavy rain with thunder': moderateOrHeavyRainWithThunder,  
  'Moderate rain at times': moderateRainAtTimes, 
  'Overcast': overcast,  
  'Partly cloudy': partlyCloudy,  
  'Patchy rain possible': patchyRainPossible,  
  'Rain': rain,
  'Moderate rain': moderateRain,
  'Light drizzle': rain,
  'Mist': fog,
}

const Main = (props) => {
  return (
    <div className="main">
      <div className="block-main-left">
        <div className="block-main-name-all">
          <div className="block-main-name">
            {props.weatherData.location.name}
          </div>
          <div className="block-main-bottom">
            {props.weatherData.current.condition.text}
          </div>
        </div>
        <div className="block-main-temperature">
          {props.weatherData.current.temp_c.toFixed()}°
        </div>
      </div>
      <div className="block-main-right">
        <img src={imageMapping[props.weatherData.current.condition.text]} alt="" />
      </div>
    </div>
  )
}

export default Main
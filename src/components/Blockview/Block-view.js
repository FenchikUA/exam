import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTemperatureHalf, faDroplet, faSun, faMoon, faExplosion } from '@fortawesome/free-solid-svg-icons';

const BlockView = (props) => {
  return (
    <div className="block-view">
      <div className="block-view-top">
        <h3>Air condition</h3>
        <button>See more</button>
      </div>
      <div className="block-view-main">
        <div className="block-feel">
          <FontAwesomeIcon icon={faTemperatureHalf} />
          <div className="real">
            <p>Real Feel</p>
            <h2>{props.weatherData.current.feelslike_c}°C</h2>
          </div>
        </div>
        <div className="block-feel">
          <FontAwesomeIcon icon={faWind} className='fa-wind-fix' />
          <div className="real">
            <p>Wind</p>
            <h2>{props.weatherData.current.wind_mph} km/h</h2>
          </div>
        </div>
        <div className="block-feel">
          <FontAwesomeIcon icon={faDroplet} />
          <div className="real">
            <p>Humidity</p>
            <h2>{props.weatherData.current.humidity}%</h2>
          </div>
        </div>
        <div className="block-feel block-feel-fix">
          <FontAwesomeIcon icon={faSun} />
          <div className="real">
            <p>UV Index</p>
            <h2>{props.weatherData.current.uv}</h2>
          </div>
        </div>
        <div className="block-feel">
          <FontAwesomeIcon icon={faMoon} />
          <div className="real">
            <p>Moonrise</p>
            <h2>{props.weatherData.forecast.forecastday[0].astro.moonrise}</h2>
          </div>
        </div>
        <div className="block-feel block-feel-fix">
          <FontAwesomeIcon icon={faExplosion} />
          <div className="real">
            <p>Sunrise</p>
            <h2>{props.weatherData.forecast.forecastday[0].astro.sunrise}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockView

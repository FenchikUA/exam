import React from 'react';
import './style.css';

const BlockWeek = (props) => {
  const week = props.weatherData.forecast.forecastday;
  return (
    <div className="block-week">
      <h3>7-day forecast</h3>
      <div className="block-week-all">
        {week.map(elem => (
          <div className="block-all-week">
            <h4>{elem.date.substr(-5)}</h4>
            <div className="block-img">
              <img src={`http://${elem.day.condition.icon}`} alt="" />
              <p>{elem.day.condition.text}</p>
            </div>
            <h4 className="h4">{elem.day.maxtemp_c.toFixed()}<span>/{elem.day.mintemp_c.toFixed()}</span></h4>
          </div>))}
        <div className="more-money">If you want more, pay</div>
      </div>
    </div>
  )
}

export default BlockWeek

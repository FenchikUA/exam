import React from 'react';
import './style.css';

const BlockTime = (props) => {

  const hours = props.weatherData.forecast.forecastday[0].hour;
  const filterHours = [6, 9, 12, 15, 18, 21]
  const neededHours = hours.filter((hour, index) => filterHours.includes(index))

  return (
    <div className="block-time">
      <h3>Today`s forecast</h3>
      <div className="block-time-all">
        {neededHours.map(elem =>
        (<div className="block">
          <p>{elem.time.substr(-5)}</p>
          <img src={`http://${elem.condition.icon}`} alt="" />
          <h2>{elem.temp_c.toFixed()}°</h2>
        </div>))
        }
      </div>
    </div>
  )
}

export default BlockTime

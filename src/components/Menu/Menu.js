import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCloudSunRain, faLayerGroup, faMap, faSliders } from '@fortawesome/free-solid-svg-icons';


const Menu = () => {
  return (
    <div className="block-menu">
      <div className="block-menu-img"><FontAwesomeIcon icon={faWind} /></div>
      <div className="block-menu-menu">
        <div className="block-menu-all block-active">
          <FontAwesomeIcon icon={faCloudSunRain} />
          <p>Weather</p>
        </div>
        <div className="block-menu-all">
          <FontAwesomeIcon icon={faLayerGroup} />
          <p>Cities</p>
        </div>
        <div className="block-menu-all">
          <FontAwesomeIcon icon={faMap} />
          <p>Map</p>
        </div>
        <div className="block-menu-all">
          <FontAwesomeIcon icon={faSliders} />
          <p>Settins</p>
        </div>
      </div>
    </div>
  )
}

export default Menu

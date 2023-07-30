import './App.css';
import Menu from "./components/Menu/Menu";
import Search from './components/Search/Search';
import Main from './components/Main/Main';
import BlockWeek from './components/Blockweek/Block-week';
import BlockTime from './components/Blocktime/Block-time';
import BlockView from './components/Blockview/Block-view'
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState('Madrid')
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(false)
  const apiKey = "c550093221f84e66b28191150232901"

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
  const fetchWeatherData = async () => {
    try {
      const data = await fetch(apiUrl);
      const parsedData = await data.json();
      if (parsedData.error) throw new Error('City not found')
      setWeatherData(parsedData)
    } catch (e) {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  }

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      if (event.target.value.trim() !== '') {
        setError(false);
        event.target.value = '';
        await fetchWeatherData()
      } else {
        setError(true);
        setTimeout(() => setError(false), 1000);
      }
    }
  };

  useEffect(() => {
    fetchWeatherData()
  }, []);

  return (
    <div>
      {!weatherData ? <p>Loading</p> : <div className='container'>
        <Menu weatherData={weatherData} />
        <div className="block-left">
          <div className="block-left-top">
            <Search city={city} handleChange={handleChange} handleKeyDown={handleKeyDown} error={error} />
            <Main weatherData={weatherData} />
          </div>
          <div className="block-left-bottom">
            <BlockTime weatherData={weatherData} />
            <BlockView weatherData={weatherData} />
          </div>
        </div>
        <div className="block-right">
          <BlockWeek weatherData={weatherData} />
        </div>
      </div>}
    </div>



  );
}

export default App;

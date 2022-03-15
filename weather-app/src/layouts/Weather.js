import React, {useState} from 'react'
import '../App.css'

export default function Weather() {

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState("");
    

    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }
    }

    
  return (
    <div className='container'>
        <input
        className='input' 
        placeholder='Enter City...' 
        onChange={e => setCity(e.target.value)} 
        value={city} 
        onKeyPress={getWeather}/>

        {typeof weatherData.main === 'undefined' ? (
            <div className='welcomemsg'>
                <p>Welcome to my Weather app! Please enter your city.</p>
            </div>
        ): (
            <div className="weather-data">
                <p className="city"><strong>{weatherData.name}</strong></p>
                <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
                <p className="weather"><strong>{weatherData.weather[0].main}</strong></p>
            </div>
        )}

        {weatherData.cod === "404" ? (
            <p class="cityError">City not found.</p>
        ) : (
            <>
            </>
        )}
    </div>
  )
}
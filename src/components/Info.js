import React, { useState } from 'react';

export default function Info() {
    const [currentWeather, setCurrentWeather] = useState('./img/');
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    //weather
    const [weather, setWeather] = useState('');
    const [temp, setTemp] = useState(null);
    const [minTemp, setMinTemp] = useState(null);
    const [maxTemp, setMaxTemp] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);

    // const weatherState = {
    //     weather: '',
    //     temp: null,
    //     minTemp: null,
    //     maxTemp: null,
    //     humidity: null,
    //     wind: null
    // }

    const api_key = '9aba1954eb6b6b23bc6bc6dcfeb1891b';
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

    const fetchWeather = async () => {
        if (city !== '') {
            const response = await fetch(apiURL + city + `&appid=${api_key}`);
            if(response.status === 404){
                setError(true);
            } else {
                const data = await response.json();

                setCurrentWeather(data.weather.main);
                setWeatherData(data);
                setError(false);
                
                //setting weather info
                setWeather(data.weather.main);
                setTemp(data.main.temp);
                setMinTemp(data.main.temp_min);
                setMaxTemp(data.main.temp_max);
                setHumidity(data.main.humidity);
                setWind(data.wind.speed)

            }
        } else {
            alert('Enter a City to Continue');
        }
    };

    // if (error) {
    //     return <div className='error'>Error: City not found</div>;
    // }

        // if (!weatherData) {
        //     return null; // or a loading spinner
        // }
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        setCity(e.target.elements[0].value);
        await fetchWeather();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text'
                placeholder='Enter City'/>
                <button 
                type='submit'
                >Submit</button>
            </form>
            <div id='extra'>
                <div id='changeOfRain'> 
                    {!weatherData ? null : <h1> </h1>}
                    {error ? <p className='error'>Error: City not found</p> : 
                    <>
                    <img src='' alt='weatherImg'/>
                    <h1>{currentWeather}</h1>
                    <h1>{weather}</h1>
                    <h1>{temp}</h1>
                    <h1>{minTemp}</h1>
                    <h1>{maxTemp}</h1>
                    <h1>{humidity}</h1>
                    <h1>{wind}</h1>
                    </>}
                </div>
            </div>
        </>
    );
}
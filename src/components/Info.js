import React, { useState } from 'react';

export default function Info() {
    const [currentWeather, setCurrentWeather] = useState('./img/');
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const api_key = '9aba1954eb6b6b23bc6bc6dcfeb1891b';
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

    const fetchWeather = async () => {
        if (city !== '') {
            const response = await fetch(apiURL + city + `&appid=${api_key}`);
            if(response.status === 404){
                setError(true);
            } else {
                const data = await response.json();

                setCurrentWeather(data.weather[0].main);
                setWeatherData(data);
                setError(false);
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
                <input type='text' placeholder='Enter City' />
                <button type='submit'>Submit</button>
            </form>
            <div id='extra'>
                <div id='changeOfRain'> 
                    {!weatherData ? null : <h1> </h1>}
                    {error ? <p className='error'>Error: City not found</p> : 
                    <>
                    <img src='' alt='image of weather'/>
                    <h1>{currentWeather}</h1>
                    </>}
                </div>
            </div>
        </>
    );
}
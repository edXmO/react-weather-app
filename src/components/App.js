import React, { useReducer, useState } from 'react';
// Styles
import '../sass/main.scss';


// Request handliNG
import axios from 'axios';

// Helpers
import apiKeys from '../helpers/apiKeys';
import INITIAL_STATE from '../helpers/initalState';


// Themes
import LightTheme from '../assets/SVG/light-theme.svg';
import DarkTheme from '../assets/SVG/dark-theme.svg';

// Components
// import Copy from './Copy/Copy';
import Searchbar from './Searchbar/Searchbar';
import CurrentData from './WeatherInfo/CurrentData/CurrentData';
import Weatherinfo from './WeatherInfo/Weatherinfo';
import IconBtn from './IconBtn/IconBtn';

// Keys
const OPENWEATHER_KEY = apiKeys.openWeatherAPI;

const init = (INITIAL_STATE) => {
    return { ...INITIAL_STATE };
};

const dataReducer = (locationData, action) => {
    switch (action.type) {
        case 'GEOLOCATION_API_REQ':
            console.log('getting user location by COORDS');
            return { ...locationData, ...action.payload };
        case 'TEXTLOCATION_API_REQ':
            return { ...locationData, ...action.payload };
        default:
            return locationData;
    }
};

const App = () => {
    const [theme, setTheme] = useState('light-theme');
    const [locationData, dispatch] = useReducer(dataReducer, INITIAL_STATE, init);

    const handleGeoLocationForecastCall = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/onecall?lat=${
                            position.coords.latitude
                        }&lon=${
                            position.coords.longitude
                        }&exclude=${'minutely,alerts'}&appid=${OPENWEATHER_KEY}`
                    )
                    .then((response) =>
                        dispatch({ type: 'GEOLOCATION_API_REQ', payload: response.data })
                    )
                    .catch((err) => console.error(err));
            });
        } else {
            console.log('Location not available');
        }
    };

    const handleTextLocationForecastCall = (query) => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${OPENWEATHER_KEY}`
            )
            .then((response) => {
                let name = response.data.name;
                return axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/onecall?lat=${
                            response.data.coord.lat
                        }&lon=${
                            response.data.coord.lon
                        }&exclude=${'minutely,alerts'}&appid=${OPENWEATHER_KEY}`
                    )
                    .then((response) =>
                        dispatch({
                            type: 'TEXTLOCATION_API_REQ',
                            payload: { ...response.data, name: name }
                        })
                    )
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className={`main-container ${theme}`}>
            <CurrentData
                data={!locationData ? '' : locationData.name}
                styles={'cont-center location-ly heading-md'}
            />
            <Searchbar
                theme={theme}
                handleTextApiReq={handleTextLocationForecastCall}
                handleGeoLocApiReq={handleGeoLocationForecastCall}
            />
            <Weatherinfo data={!locationData ? '' : locationData} theme={theme} />
            <IconBtn
                btnStyle={'theme-toggler theme-btn'}
                handleIconClick={() =>
                    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme')
                }
                children={
                    theme === 'light-theme' ? (
                        <LightTheme className="forecast-info__icon" />
                    ) : (
                        <DarkTheme className="forecast-info__icon" />
                    )
                }
            />
        </div>
    );
};

export default App;

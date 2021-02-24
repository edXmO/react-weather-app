import React, {useEffect, useReducer, useState} from 'react';
// Styles
import '../sass/main.scss';

// Keys
const OPENWEATHER_KEY = apiKeys.openWeatherAPI;

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


const init = (INITIAL_STATE) => {
    return {...INITIAL_STATE}
}

const dataReducer = (locationData, action) => {
    switch(action.type){
        case 'LOCATION_API_REQ':
            return {...locationData, ...action.payload};
        default:
            return locationData;
    }
}

const App = () => {

    const [theme, setTheme] = useState('light-theme');
    const [locationData, dispatch] = useReducer(dataReducer, INITIAL_STATE, init);

    const handleGeoLocationForecastCall = () => {
        console.log('handleGeolocation first')
        // axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}`)
        // .then(response => console.log(response.data))
        // .catch(err => console.error(err));
    };

    const handleTextLocationForecastCall = query => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${OPENWEATHER_KEY}`)
        .then(response => dispatch({type: 'LOCATION_API_REQ', payload: response.data}))
        .catch(err => console.error(err))
    };

    return (
        <div className={`main-container ${theme}`}>
            <CurrentData 
            data={!locationData ? '' : locationData.name} 
            styles={'cont-center location-ly heading-md'}/>
            <Searchbar 
            theme={theme} 
            handleTextApiReq={handleTextLocationForecastCall} 
            handleGeoLocApiReq={handleGeoLocationForecastCall}/>
            <Weatherinfo 
            data={!locationData ? '' : locationData}
            theme={theme}/>
            <IconBtn 
            btnStyle={'theme-toggler theme-btn'}
            handleIconClick={() => setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme')}
            children={theme ==='light-theme' ? <LightTheme className='forecast-info__icon' /> : <DarkTheme className='forecast-info__icon'/>}/>
        </div>
    )
};

export default App;
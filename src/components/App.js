import React, {useEffect, useState, useReducer} from 'react';
// Styles
import '../sass/main.scss';
// Request handling

import axios from 'axios';
//Helpers
import apiKeys from '../helpers/apiKeys';

// Components
// import Copy from './Copy/Copy';
import Searchbar from './Searchbar/Searchbar';
import CurrentData from './WeatherInfo/CurrentData/CurrentData';
import Weatherinfo from './WeatherInfo/Weatherinfo';

// Keys
const OPENWEATHER_KEY = apiKeys.openWeatherAPI;

const INITWEATHER_DATA = {
    // "coord": {
    //     "lon": "",
    //     "lat": ""
    // },
    // "weather": {
    //     "description": ""
    // },
    // "main": {
    //     "temperature": "",
    //     "feel_like": "",
    //     "humidity": ""
    // },
    // "name": "",
    // "wind": {
    //     "speed": "",
    //     "deg": ""
    // }
}

const init = (INITWEATHER_DATA) => {
    return {...INITWEATHER_DATA}
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

    const [locationData, dispatch] = useReducer(dataReducer, INITWEATHER_DATA, init)
    const handleGeoLocationForecastCall = () => {
        console.log('handleGeolocation first')
        // axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}`)
        // .then(response => console.log(response.data))
        // .catch(err => console.error(err));
    }

    const handleTextLocationForecastCall = query => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${OPENWEATHER_KEY}`)
        .then(response => dispatch({type: 'LOCATION_API_REQ', payload: response.data}))
        .catch(err => console.error(err))
    }

    return (
        <div className='main-container'>
            <CurrentData data={!locationData ? '' : locationData.name} styles={'cont-center location-ly heading-md'}/>
            <Searchbar handleTextApiReq={handleTextLocationForecastCall} handleGeoLocApiReq={handleGeoLocationForecastCall}/>
            <Weatherinfo data={!locationData ? '' : locationData} />
            {/* <Copy /> */}
        </div>
    )
}

export default App;
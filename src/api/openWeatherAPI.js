import axios from 'axios';
import apiKeys from '../helpers/apiKeys';

const openWeather = query => {
    axios.create({
        baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=',
        query: query,
        appid: apiKeys.openWeatherAPI
    });
}

export default openWeather;
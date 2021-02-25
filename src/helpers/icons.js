import LocationIcon from '../assets/SVG/pin.svg';
import InfoIcon from '../assets/SVG/info.svg';
import close from '../assets/SVG/close.svg';
import rainProb from '../assets/SVG/rain-probability.svg';
import cloudy from '../assets/SVG/wi-cloudy.svg';
import dayCloudy from '../assets/SVG/wi-day-cloudy.svg';
import daySunny from '../assets/SVG/wi-day-sunny.svg';
import fog from '../assets/SVG/wi-fog.svg';
import nightAltCloudy from '../assets/SVG/wi-night-alt-cloudy.svg';
import nightClear from '../assets/SVG/wi-night-clear.svg';
import rain from '../assets/SVG/wi-rain.svg';
import sleet from '../assets/SVG/wi-sleet.svg';
import snow from '../assets/SVG/wi-snow.svg';
import windy from '../assets/SVG/wi-windy.svg';

export const icons = {
    "location": LocationIcon,
    "info": InfoIcon,
    "close": close,
    "rain-probability": rainProb,
    "wi-cloudy": cloudy,
    "wi-day-cloudy": dayCloudy,
    "wi-day-sunny": daySunny,
    "wi-fog": fog,
    "wi-night-alt-cloudy": nightAltCloudy,
    "wi-night-clear": nightClear,
    "wi-rain": rain,
    "wi-sleet": sleet,
    "wi-snow": snow,
    "wi-windy": windy
};

const getIcon = iconName => {
    const data = {
       'Clear': {
           id: 'wi-day-sunny'
       },
       'Clouds': {
           id: 'wi-day-cloudy'
       },
       'Snow': {
           id: 'wi-snow'
       },
       'Rain': {
           id: 'wi-rain'
       },
       'Fog': {
           id: 'wi-fog'
       },
       'Thunderstorm': {
           id: 'wi-windy'
       },
       'Drizzle': {
           id: 'wi-sleet'
       }
    }

    const icon = data[iconName];
    
    if(icon){
        return icon;
    } else {
        console.error(`No icon for description: ${iconKey}`)
    }
} 

export default getIcon;
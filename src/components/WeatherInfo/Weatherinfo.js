import React from 'react';
import '../../sass/main.scss';
import PropTypes from 'prop-types';

// Helpers
import helper from '../../helpers/helper';

// Components
import CurrentData from './CurrentData/CurrentData';
import Forecast from '../Forecast/Forecast';


const Weatherinfo = ({data, theme}) => {
    
    const temp = data.current === undefined ? '' : helper.decimalParser(helper.kelvinToCelsius(data.current.temp))+' ºC';
    const date = data.current === undefined ? '' : helper.parseUnixToLocaleTime(data.current.dt);
    const hour = data.current === undefined ? '' : helper.parseUnixTime(data.current.dt);
    const desc = data.current === undefined ? '' : data.current.weather[0].main;

    return (
        <div className='weather-card'>
            <CurrentData data={hour} type={'TIME'} styles={'cont-center heading-sm'}/>
            <CurrentData data={date} type={'DATE'} styles={'cont-center heading-sm'}/>
            <CurrentData data={desc} type={'DESC'} styles={'cont-center heading-md'}/>
            <CurrentData data={temp} type={'TEMP'} styles={'cont-center heading-bg'}/>
            <Forecast data={data} theme={theme}/>
        </div>
    )
}

export default Weatherinfo;

Weatherinfo.propTypes = {
    data: PropTypes.object,
    theme: PropTypes.string
}
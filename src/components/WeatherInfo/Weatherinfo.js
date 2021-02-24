import React from 'react';
import '../../sass/main.scss';
import PropTypes from 'prop-types';

// Helpers
import helper from '../../helpers/helper';

// Components
import CurrentData from './CurrentData/CurrentData';
import Forecast from '../Forecast/Forecast';


const Weatherinfo = ({data}) => {
    
    const temp = data.main === undefined ? '' : helper.decimalParser(helper.kelvinToCelsius(data.main.temp))+' ºC';

    return (
        <div className='weather-card'>
            <CurrentData data={'18:29'} styles={'cont-center heading-sm'}/>
            <CurrentData data={'Tuesday, February 23, 2021'} styles={'cont-center heading-sm'}/>
            <CurrentData data={'Cloudy'} type={'DESC'} styles={'cont-center heading-md'}/>
            <CurrentData data={temp} type={'TEMP'} styles={'cont-center heading-bg'}/>
            <Forecast/>
        </div>
    )
}

export default Weatherinfo;

Weatherinfo.propTypes = {
    data: PropTypes.object
}
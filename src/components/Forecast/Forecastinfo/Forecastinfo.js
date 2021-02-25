import React from 'react';
import PropTypes from 'prop-types';
// Svg's 
import WiCloudy from '../../../assets/SVG/wi-cloudy.svg';
import RainProb from '../../../assets/SVG/rain-probability.svg';
import IconBtn from '../../IconBtn/IconBtn';

const ForecastInfo = ({hour, temp, rain}) => {
    return (
        <div className='forecast-info'>
            <span className='forecast-info__title'>
                {hour}
            </span>
            <IconBtn btnStyle={'btn-inv'} children={<WiCloudy className='forecast-info__icon'/>}/>
            <p className='forecast-info__temperature'>
                {temp} ºC
            </p>
            <div className='forecast-info__rain'>
                <IconBtn btnStyle={'btn-inv'} children={<RainProb className='forecast-info__icon--rain'/>}/>
                {rain + '%' || '0 %'} 
            </div>
        </div>
    )
}

export default ForecastInfo;

ForecastInfo.propTypes = {
    hour : PropTypes.string,
    temp : PropTypes.string,
    rain : PropTypes.number

}
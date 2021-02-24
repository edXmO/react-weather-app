import React from 'react';
// Svg's 
import WiCloudy from '../../../assets/SVG/wi-cloudy.svg';
import IconBtn from '../../IconBtn/IconBtn';

const ForecastInfo = () => {
    return (
        <div className='forecast-info'>
            <span className='forecast-info__title'>
                12:51
            </span>
            <IconBtn btnStyle={'btn-inv'} children={<WiCloudy className='forecast-info__icon'/>}/>
            <p className='forecast-info__temperature'>
                26 ºC
            </p>
            <div className='forecast-info__rain'>
                0 %
            </div>
        </div>
    )
}

export default ForecastInfo;
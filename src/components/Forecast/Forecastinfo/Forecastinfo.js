import React from 'react';
import PropTypes from 'prop-types';
// Svg's
import WiCloudy from '../../../assets/SVG/wi-cloudy.svg';
import RainProb from '../../../assets/SVG/rain-probability.svg';
import IconBtn from '../../IconBtn/IconBtn';

const ForecastInfo = ({ type, hour, temp, rain, maxTemp, minTemp, day, icon }) => {
    const renderForecast = (type) => {
        if (type === 'HOURLY') {
            return (
                <React.Fragment>
                    <span className="forecast-info__title">{hour}</span>
                    <IconBtn
                        btnStyle={'btn-inv'}
                 
                        icon={icon}
                    />
                    <p className="forecast-info__temperature">{temp} ºC</p>
                    <div className="forecast-info__rain">
                        <IconBtn
                            btnStyle={'btn-inv'}
                            children={<RainProb className='forecast-info__icon'/>}   
                        />
                        {rain + '%' || '0 %'}
                    </div>
                </React.Fragment>
            );
        }
        if (type === 'DAILY') {
            return (
                <React.Fragment>
                    <span className="forecast-info__title">{day}</span>
                    <IconBtn
                        btnStyle={'btn-inv'}
                        icon={icon}
                    />
                    <p className="forecast-info__temperature">{maxTemp} ºC</p>
                    <p className="forecast-info__temperature">{minTemp} ºC</p>
                    <div className="forecast-info__rain">
                        <IconBtn
                            btnStyle={'btn-inv'}
                            children={<RainProb className='forecast-info__icon'/>}   
                        />
                        {'0 %' || rain + '%'}
                    </div>
                </React.Fragment>
            );
        }
    };

    return <div className="forecast-info">{renderForecast(type)}</div>;
};

export default ForecastInfo;

ForecastInfo.propTypes = {
    hour: PropTypes.string,
    temp: PropTypes.string,
    rain: PropTypes.number,
    type: PropTypes.string,
    maxTemp: PropTypes.string,
    minTemp: PropTypes.string,
    day: PropTypes.string
};

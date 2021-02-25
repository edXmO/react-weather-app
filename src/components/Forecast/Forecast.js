import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwiperCore from 'swiper';
// Components
import Forecastinfo from './Forecastinfo/Forecastinfo';
// Helper
import helper from '../../helpers/helper';

const Forecast = ({ theme, data }) => {
    let activeTheme =
    theme === 'light-theme' ? 'light-component' : 'dark-component';

    const { daily, hourly } = data;

    const renderDailyForecast = hourly.slice(0, 5).map((hour) => {
        const { dt, temp, humidity, weather } = hour;
        return (
            <Forecastinfo
                type={'HOURLY'}
                key={dt + temp}
                hour={helper.parseUnixTime(dt)}
                temp={helper.decimalParser(helper.kelvinToCelsius(temp))}
                rain={humidity}
                icon={weather[0].main}
            />
        );
    });

    const renderWeeklyForecast = daily.slice(0, 5).map((day) => {
        const { dt, temp, rain, weather } = day;
        return (
            <Forecastinfo
                type={'DAILY'}
                key={dt + temp}
                day={helper.parseUnixGetDay(dt)}
                maxTemp={helper.decimalParser(helper.kelvinToCelsius(temp.max))}
                minTemp={helper.decimalParser(helper.kelvinToCelsius(temp.min))}
                rain={rain}
                icon={weather[0].main}
            />
        );
    });

    useEffect(() => {
        let swiper = new SwiperCore('.swiper-container', {
            slidesPerView: 1,
            followFinger: true,
            grabCursor: true,
            direction: 'horizontal',
            loop: false
        });
        swiper.init();
    }, []);

    return (
        <div className={`swiper-container ${activeTheme}`}>
            <div className="swiper-wrapper">
                <div className="swiper-slide">{renderDailyForecast}</div>
                <div className="swiper-slide">{renderWeeklyForecast}</div>
            </div>
        </div>
    );
};

export default Forecast;

Forecast.propTypes = {
    theme: PropTypes.string,
    data: PropTypes.object
};

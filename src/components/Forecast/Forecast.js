import React, {useEffect} from 'react';
import SwiperCore from 'swiper';
// Components
import Forecastinfo from './Forecastinfo/Forecastinfo';

const Forecast = ({theme}) => {
    let activeTheme = theme === 'light-theme' ? 'light-component' : 'dark-component';
    useEffect(() => {
        let swiper = new SwiperCore('.swiper-container', {
            slidesPerView: 1,
            followFinger: true,
            grabCursor: true,
            direction: 'horizontal',
            loop: false,
        });
    }, [])
    
    return (
        <div className={`swiper-container ${activeTheme}`}>
            <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                   <Forecastinfo/> 
                   <Forecastinfo/> 
                   <Forecastinfo/> 
                   <Forecastinfo/> 
                   <Forecastinfo/> 
                </div>
                <div className='swiper-slide'>
                   <Forecastinfo/> 
                   <Forecastinfo/> 
                   <Forecastinfo/> 
                   <Forecastinfo/> 
                   <Forecastinfo/> 
                </div>
            </div>
        </div>
    ) 
}

export default Forecast;

Forecast.propTypes = {
}




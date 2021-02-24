import React, {useEffect} from 'react';
import SwiperCore from 'swiper';
// Components
import Forecastinfo from './Forecastinfo/Forecastinfo';

const Forecast = () => {
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
        <div className='swiper-container'>
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




import React, {useEffect} from 'react';
import Swiper, {Navigation, Pagination} from 'swiper';
// Components
import Forecastinfo from './Forecastinfo/Forecastinfo';
Swiper.use([Navigation, Pagination]);

const Forecast = () => {
    useEffect(() => {
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            followFinger: true,
            grabCursor: true,
            direction: 'horizontal',
            loop: false,

            // // If we need pagination
            // pagination: {
            //     el: '.swiper-pagination1',
            //     el: '.swiper-pagination2'
            // },
            pagination: {
                el: 'swiper-pagination',
                type: 'bullets'
              },
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
            <div className="swiper-pagination"></div>
        </div>

    ) 
}

export default Forecast;

Forecast.propTypes = {
}




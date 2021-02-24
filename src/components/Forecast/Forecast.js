import React, {useEffect} from 'react';
import Swiper, {Navigation, Pagination} from 'swiper';


const Forecast = () => {
    Swiper.use([Navigation, Pagination]);
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
                el: '.swiper-pagination',
              },
        });
    }, [])
    
    return (
        <div className='swiper-container'>
            <div className='swiper-wrapper'>
                <div className='swiper-slide'>First</div>
                <div className='swiper-slide'>Second</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

    ) 
}

export default Forecast;

Forecast.propTypes = {
}




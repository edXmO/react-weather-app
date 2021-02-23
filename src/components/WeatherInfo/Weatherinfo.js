import React from 'react';
import '../../sass/main.scss';

// Components
import CurrentData from './CurrentData/CurrentData';


const Weatherinfo = () => {
    return (
        <div className='weather-card'>
            <CurrentData data={'18:29'} styles={'cont-center heading-sm'}/>
            <CurrentData data={'Tuesday, February 23, 2021'} styles={'cont-center heading-sm'}/>
            <CurrentData data={'Cloudy'} type={'temp'} styles={'cont-center heading-md'}/>
            <CurrentData data={'7º'} type={'temp'} styles={'cont-center heading-bg'}/>
        </div>
    )
}

export default Weatherinfo;
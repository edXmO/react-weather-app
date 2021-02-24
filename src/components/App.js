import React from 'react';
// Styles
import '../sass/main.scss';


// Components
// import Copy from './Copy/Copy';
import Searchbar from './Searchbar/Searchbar';
import CurrentData from './WeatherInfo/CurrentData/CurrentData';
import Weatherinfo from './WeatherInfo/Weatherinfo';

const App = () => {
    return (
        <div className='main-container'>
            <CurrentData data={'Madrid'} styles={'cont-center location-ly heading-md'}/>
            <Searchbar />
            <Weatherinfo />
            {/* <Copy /> */}
        </div>
    )
}

export default App;
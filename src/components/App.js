import React from 'react';
// Styles
import '../sass/main.scss';


// Components
import Copy from './Copy/Copy';
import Searchbar from './Searchbar/Searchbar';
import Weatherinfo from './WeatherInfo/Weatherinfo';

const App = () => {
    return (
        <div className='main-container'>
            <Searchbar />
            <Weatherinfo />
            <Copy />
        </div>
    )
}

export default App;
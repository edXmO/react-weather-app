import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../sass/main.scss';
// Svg's
import LocationIcon from '../../assets/SVG/pin.svg';
import InfoIcon from '../../assets/SVG/info.svg';
// Helper component
import IconBtn from '../IconBtn/IconBtn';


const Searchbar = ({handleTextApiReq, handleGeoLocApiReq, theme}) => {

    let activeTheme = theme === 'light-theme' ? 'light-component' : 'dark-component';


    const [locationQuery, setLocationQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        handleTextApiReq(locationQuery);
    }

    const handleGeoLocClick = () => {
        console.log('allow geolocation');
        handleGeoLocApiReq();
    }

    const handleAboutInfo = () => {
        console.log('show about info!')
    }

    const handleChange = e => {
        setLocationQuery(e.target.value);
    }


    return (
        <div className={`searchbar ${activeTheme}`}>
            <IconBtn handleIconClick={handleGeoLocClick} btnStyle='btn-inv btn-inv-lf' children={<LocationIcon className='searchbar__icon'/>}/>
            <div className={`input-box ${activeTheme}`}>
                <form onSubmit={handleSubmit}>
                <label className='input-box__label'>
                    <span className='input-box__description'>Location: </span>
                    <input value={locationQuery} onChange={handleChange} className={`input-box__input ${activeTheme}`} type='text' placeholder=''/>
                </label>
                </form>
            </div>
            <IconBtn handleIconClick={handleAboutInfo} btnStyle='btn-inv' children={<InfoIcon className='searchbar__icon searchbar__icon--info'/>}/>
        </div>
    )
}

export default Searchbar;

Searchbar.propTypes = {
    handleTextApiReq : PropTypes.func,
    handleGeoLocApiReq : PropTypes.func
}
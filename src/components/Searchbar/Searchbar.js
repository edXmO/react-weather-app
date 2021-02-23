import React from 'react';
import '../../sass/main.scss';
// Svg's
import LocationIcon from '../../assets/SVG/pin.svg';
import InfoIcon from '../../assets/SVG/info.svg';
// Helper component
import IconBtn from '../IconBtn/IconBtn';


const Searchbar = () => {
    return (
        <div className='searchbar'>
            <div className='input-box'>
                <IconBtn btnStyle='btn-inv btn-inv-lf' children={<LocationIcon className='input-box__icon'/>}/>
                <label className='input-box__label'>
                    <span className='input-box__description'>Location: </span>
                    <input className='input-box__input' type='text' placeholder=''/>
                </label>
                <IconBtn btnStyle='btn-inv btn-inv--rg' children={<InfoIcon className='input-box__icon'/>}/>
            </div>
        </div>
    )
}

export default Searchbar;
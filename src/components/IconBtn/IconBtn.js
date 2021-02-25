import React  from 'react';
import PropTypes from 'prop-types';
import getIcon from '../../helpers/icons';
import {icons} from '../../helpers/icons';

const IconBtn = ({ handleIconClick, btnStyle, children, icon }) => {

    const renderWeatherIcon = weatherIcon => {
        const iconKey = getIcon(weatherIcon);
        const { id } = iconKey;
        let svg = React.createElement(icons[id], {className : 'forecast-info__icon'});
        return svg;
    }

    const handleClick = () => {
        if(!handleIconClick) return;
        handleIconClick();
    };

    return (
        <React.Fragment>
            {!icon ? <button onClick={handleClick} className={btnStyle}>
                {children}
            </button>
            :
            renderWeatherIcon(icon)}
        </React.Fragment>
    );
};

export default IconBtn;

IconBtn.propTypes = {
    btnStyle: PropTypes.string,
    children: PropTypes.element,
    handleIconClick: PropTypes.func
};


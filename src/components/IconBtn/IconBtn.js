import React from 'react';
import PropTypes from 'prop-types';

const IconBtn = ({ handleIconClick, btnStyle, children }) => {
    const handleClick = () => {
        handleIconClick();
    };

    return (
        <button onClick={handleClick} className={btnStyle}>
            {children}
        </button>
    );
};

export default IconBtn;

IconBtn.propTypes = {
    btnStyle: PropTypes.string,
    children: PropTypes.element,
    handleIconClick: PropTypes.func
};

// 'btn-inv btn-inv--lf'
// 'input-box__icon' iconstyle

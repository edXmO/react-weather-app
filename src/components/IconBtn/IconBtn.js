import React from 'react';
import PropTypes from 'prop-types';

const IconBtn = ({btnStyle, children}) => {

    
    return (
        <button className={btnStyle}>
                    {children}
        </button>
    )
}

export default IconBtn;

IconBtn.propTypes = {
    btnStyle: PropTypes.string,
    children: PropTypes.element
}

// 'btn-inv btn-inv--lf'
// 'input-box__icon' iconstyle
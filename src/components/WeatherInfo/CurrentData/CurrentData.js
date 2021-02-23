import React from 'react';
import PropTypes from 'prop-types';

const CurrentData = ({data, styles, temp}) => {


    return (
        <div className={styles}>
            {!temp ? data : temp}
        </div>
    )
}

export default CurrentData;

CurrentData.propTypes = {
    data: PropTypes.string
}
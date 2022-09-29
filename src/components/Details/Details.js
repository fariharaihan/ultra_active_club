import React from 'react';

const Details = ({ details }) => {
    return (
        <div>
            <h4>exercise details</h4>
            <p>selected: {details.length}</p>
        </div>
    );
};

export default Details;
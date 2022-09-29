import React from 'react';
import './Activity.css'

const Activity = (props) => {
    // console.log(props.activity)
    const { image, name, age, time } = props.activity;
    return (
        <div className='activity'>
            <img src={image} alt="" ></img>
            <div className='activity-info'>
                <p className='activity-name'>{name}</p>
                <p>For age: {age}</p>
                <p>Time required: {time}</p>
            </div>
        </div>
    );
};

export default Activity;
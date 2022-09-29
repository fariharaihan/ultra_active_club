import React from 'react';
import './Activity.css'

const Activity = ({ activity, handleAddToList }) => {
    // console.log(props.activity)
    // const { activity, handleAddToList } = props
    const { image, name, age, time } = activity;

    return (
        <div className='activity'>
            <img src={image} alt="" ></img>
            <div className='activity-info'>
                <p className='activity-name'>{name}</p>
                <p>For age: {age}</p>
                <p>Time required: {time} m</p>
            </div>
            <button onClick={() => handleAddToList(activity)} className='btn-list'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Activity;
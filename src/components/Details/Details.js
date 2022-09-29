import React from 'react';
import './Details.css'

const Details = ({ details }) => {
    // console.log(details)

    let time = 0;
    for (const activity of details) {
        time = time + activity.time

    }
    return (
        <div className='details'>
            <div>
                <h3>Name: Raihan Khan</h3>
                <p><small>Khulna,Bangladesh</small></p>
            </div>
            <div className='client-info-container'>
                <div className='client-info'>
                    <h3>75 <small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div className='client-info'>
                    <h3>6.0 </h3>
                    <p>Height</p>
                </div>
                <div className='client-info'>
                    <h3>27 <small>yrs</small></h3>
                    <p>Age</p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='break-container'>
                <p>2m</p>
                <p>5m</p>
                <p>7m</p>
                <p>10m</p>
            </div>

            <div className='time-container'>
                <h3>Exercise Details</h3>
                <p>Exercise time:  {time}m</p>
                <p>Break time: { }</p>
            </div>
            <button className='btn-activity'>
                <p>Activity Completed</p>
            </button>
            {/* <p>selected: {details.length}</p> */}
        </div>
    );
};

export default Details;
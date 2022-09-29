import React, { useState } from 'react';
import './Details.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = ({ details }) => {
    const [breakTime, setBreakTime] = useState([0])
    const handeBrake = (second) => {
        setBreakTime(second)
        console.log('boom')
    }

    // console.log(details)

    let time = 0;
    for (const activity of details) {
        time = time + activity.time

    }

    const notify = () => {
        toast("All process are complete", {
            position: "top-center"
        })

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
                <button onClick={handeBrake}>2m</button>
                <button onClick={handeBrake}>5m</button>
                <button onClick={handeBrake}>7m</button>
                <button onClick={handeBrake}>10m</button>
            </div>

            <div className='time-container'>
                <h3>Exercise Details</h3>
                <p>Exercise time:  {time}m</p>
                <p>Break time: { }</p>
            </div>
            <button onClick={notify} className='btn-activity'>
                <p>Activity Completed</p>
            </button>
            <ToastContainer />

            {/* <p>selected: {details.length}</p> */}
        </div>

    );
};

export default Details;
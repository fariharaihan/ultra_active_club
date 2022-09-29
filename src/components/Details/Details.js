import React, { useState } from 'react';
import './Details.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = ({ details }) => {
    // console.log(details)
    const [breakTime, setBreakTime] = useState([0]);
    const handeBrake = (second) => {
        setBreakTime(second);
    }

    let time = 0;
    for (const activity of details) {
        time = time + activity.time
    }

    const notify = () => {
        toast("All process are complete", {
            position: "top-center"
        });
    }

    return (
        <div className='details'>
            <div>
                <h3 className='client-name'>Name: Raihan Khan</h3>
                <p>Address: <small>Khulna,Bangladesh</small></p>
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
                <button onClick={(add) => handeBrake(5)}>5m</button>
                <button onClick={(add) => handeBrake(10)}>10m</button>
                <button onClick={(add) => handeBrake(15)}>15m</button>
                <button onClick={(add) => handeBrake(20)}>20m</button>
            </div>

            <div className='time-container'>
                <h3>Exercise Details</h3>
                <p>Exercise time:  {time}m</p>
                <p>Break time: {breakTime}m</p>
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
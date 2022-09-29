import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Club.css';

const Club = () => {
    const [activities, setActivities] = useState([]);
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddToList = (activity) => {
        console.log(activity)
        const newDetails = [...details, activity];
        setDetails(newDetails);

    }
    return (
        <div className='club-container'>
            <div className="exercise-container">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        handleAddToList={handleAddToList}
                    ></Activity>)
                }
            </div>
            <div className="exercise-details-container">
                <h4>exercise details</h4>
                <p>selected: {details.length}</p>
            </div>
        </div>
    );
};

export default Club;
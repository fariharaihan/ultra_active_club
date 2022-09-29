import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Club.css';

const Club = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='club-container'>
            <div className="exercise-container">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
            <div className="exercise-details-container">
                <h4>exercise details</h4>
            </div>
        </div>
    );
};

export default Club;
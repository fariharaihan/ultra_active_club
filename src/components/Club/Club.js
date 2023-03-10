import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';
import Question from '../Question/Question';
import './Club.css';

const Club = () => {
    const [activities, setActivities] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddToList = (activity) => {
        // console.log(activity)
        const newDetails = [...details, activity];
        setDetails(newDetails);

    }
    return (
        <div>

            <div className='club-container'>
                <div className='exercise-container'>
                    <h1>Select your exercise</h1>
                    <div className="exercise-card">
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                handleAddToList={handleAddToList}
                            ></Activity>)
                        }
                    </div>
                </div>
                <div className="exercise-details-container">
                    <Details details={details}></Details>
                </div>
            </div>
            <div>
                <Question></Question>
            </div>
        </div>

    );
};

export default Club;
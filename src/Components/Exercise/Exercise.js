import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';

const Exercise = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch('workouts.json')
    .then(res => res.json())
    .then(data => setWorkouts(data))
  }, []);
  return (
    <div>
      <h2>Physical Exercise Studio</h2>
      <div className='exercise-container'>
        <div className="workout-container">
          {workouts.map(workout => <Workout key={workout.id} workout = {workout}></Workout>)}
        </div>
        <div className="user-activity-container"></div>
      </div>
    </div>
  );
};

export default Exercise;
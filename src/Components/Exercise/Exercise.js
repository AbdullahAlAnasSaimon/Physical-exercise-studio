import React, { useEffect, useState } from 'react';
import Useractivity from '../Useractivity/Useractivity';
import Workout from '../Workout/Workout';
import './Exercise.css';
import Logo from '../../images/logo2.png';

const Exercise = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch('workouts.json')
    .then(res => res.json())
    .then(data => setWorkouts(data))
  }, []);
  return (
    <div>
      {/* logo container */}
      <div className="logo-container">
        <img className='logo' src={Logo} alt="" />
        <h1 className='logo-title'>Physical Excercise Studio</h1>
      </div>
      {/* select workout section start */}
      <h2 className='workout-title'>Select today’s exercise</h2>
      <div className='exercise-container'>
        <div className="workout-container">
          {workouts.map(workout => <Workout key={workout.id} workout = {workout}></Workout>)}
        </div>
        <div className="user-activity-container">
          <Useractivity></Useractivity>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
import React, { useEffect, useState } from 'react';
import Useractivity from '../Useractivity/Useractivity';
import Workout from '../Workout/Workout';
import './Exercise.css';
import Logo from '../../images/logo2.png';

const Exercise = () => {
  const [workouts, setWorkouts] = useState([]);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    fetch('workouts.json')
      .then(res => res.json())
      .then(data => setWorkouts(data))
  }, []);

  const btnClickHandle = (workout) =>{
    const newSeconds = second + parseInt(workout.duration);
    setSecond(newSeconds);
  }
  return (

    <div>
      <div className='exercise-container'>
        <div className="logo-workout-wrapper">
          {/* logo container */}
          <div className="logo-container">
            <img className='logo' src={Logo} alt="" />
            <h1 className='logo-title'>Physical Exercise Studio</h1>
          </div>
          {/* select workout section start */}
          <h2 className='exercise-title'>Select today’s exercise</h2>
          <div className="workout-container">
            {workouts.map(workout => <Workout
            key={workout.id}
            workout={workout}
            btnClickHandle = {btnClickHandle}
            ></Workout>)}
          </div>
        </div>
        <div className="user-activity-container">
          <Useractivity second = {second}></Useractivity>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
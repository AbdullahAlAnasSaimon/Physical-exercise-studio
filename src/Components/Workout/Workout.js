import React from 'react';
import './Workout.css';

const Workout = (props) => {
  const {image, title, body, age, duration} = props.workout;
  return (
    <div className='workout'>
      <img className='workout-thumb' src={image} alt="" />
      <h4 className='workout-title'>{title}</h4>
      <p>{body.slice(0, 80) + '.'}</p>
      <p>For Age : <strong>{age}</strong></p>
      <p>Time Required : <strong>{duration}s</strong></p>
      <button className='workout-btn'>Add To List</button>
    </div>
  );
};

export default Workout;
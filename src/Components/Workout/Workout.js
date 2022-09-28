import React from 'react';
import './Workout.css';

const Workout = (props) => {
  const {image, title, body, age, duration} = props.workout;
  return (
    <div className='workout'>
      <img className='workout-thumb' src={image} alt="" />
      <h4>{title}</h4>
      <p>{body.slice(0, 80) + '.'}</p>
      <h5>For Age: {age}</h5>
      <h5>Workout Time: {duration}s</h5>
      <button>Add To List</button>
    </div>
  );
};

export default Workout;
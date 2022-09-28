import React from 'react';

const Workout = (props) => {
  return (
    <div>
      <img src={props.workout.image} alt="" />
      <h4>{props.workout.title}</h4>
      <p>{props.workout.body}</p>
      <h5>For Age: {props.workout.age}</h5>
      <h5>Workout Time: {props.workout.duration}s</h5>
    </div>
  );
};

export default Workout;
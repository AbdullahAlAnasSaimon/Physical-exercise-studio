import React from 'react';
import './Useractivity.css';
import User from '../../images/user.jpg';

const Useractivity = () => {
  return (
    <div className='user-activity'>
      <div className='user-container'>
        <div>
          <img className='user-img' src={User} alt="" />
        </div>
        <div className='user-details'>
          <h3 className='user-name'>Abdulla Al Anas Saimon</h3>
          <p className='location'>Lakshmipur, Bangladesh</p>
        </div>
      </div>

      <div className="user-physical-details">
        <div className="weight">
          <h2>60<small>kg</small></h2>
          <p>Weight</p>
        </div>
        <div className="height">
          <h2>5.6'</h2>
          <p>Height</p>
        </div>
        <div className="age">
          <h2>22<small>yrs</small></h2>
          <p>Age</p>
        </div>
      </div>

      <div className='break-container'>
        <h2>Add a Break</h2>
        <div className="break">
          <button className="break-btn">10s</button>
          <button className="break-btn">20s</button>
          <button className="break-btn">30s</button>
          <button className="break-btn">40s</button>
          <button className="break-btn">50s</button>
        </div>
      </div>

      <div className="exercise-details">
        <h2>Exercise Details</h2>
        <div className='exercise-time-container'>
          <h4 className="time-title">Exercise Time</h4>
          <div className="exercise-time">0s</div>
        </div>
        <div className="break-time-container">
        <h4 className="break-title">Break Time</h4>
          <div className="break-time">0s</div>
        </div>
      </div>

      <button className="activity-complete">Activity Completed</button>
    </div>
  );
};

export default Useractivity;
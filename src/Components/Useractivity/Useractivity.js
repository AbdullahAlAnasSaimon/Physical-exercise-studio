import React, { useState } from 'react';
import './Useractivity.css';
import User from '../../images/user.jpg';

const Useractivity = (props) => {
  const {second} = props;

  const [breakTime, setBreakTime] = useState('0 s');

  const breakHandler = (event) =>{
    // console.log('clicked', event.target.textContent);
    const eventTarget = event.target.textContent;
    setBreakTime(eventTarget);
    localStorage.setItem('break-time', eventTarget);
  }
  const getBreakTimeFromLocalStorage = localStorage.getItem('break-time');

  // console.log(getBreakTimeFromLocalStorage);


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
          <button onClick={breakHandler} className="break-btn">10 s</button>
          <button onClick={breakHandler} className="break-btn">20 s</button>
          <button onClick={breakHandler} className="break-btn">30 s</button>
          <button onClick={breakHandler} className="break-btn">40 s</button>
          <button onClick={breakHandler} className="break-btn">50 s</button>
        </div>
      </div>

      <div className="exercise-details">
        <h2>Exercise Details</h2>
        <div className='exercise-time-container'>
          <h4 className="time-title">Exercise Time</h4>
          <div className="exercise-time">{second} second</div>
        </div>
        <div className="break-time-container">
        <h4 className="break-title">Break Time</h4>
          <div className="break-time">{breakTime ? getBreakTimeFromLocalStorage : breakTime}econd</div>
        </div>
      </div>

      <button className="activity-complete">Activity Completed</button>
    </div>
  );
};

export default Useractivity;
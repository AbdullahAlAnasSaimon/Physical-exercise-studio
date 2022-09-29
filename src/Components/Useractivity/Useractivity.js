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
          <h2>5.6<small>in</small></h2>
          <p>Height</p>
        </div>
        <div className="age">
          <h2>22<small>yrs</small></h2>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Useractivity;
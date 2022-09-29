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
    </div>
  );
};

export default Useractivity;
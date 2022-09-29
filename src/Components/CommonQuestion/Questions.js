import React from 'react';
import './Questions.css';

const Questions = () => {
  return (
    <div className='question-container'>
      <div className='questions'>
        <h2 className='question-title'>How does React works?</h2>
        <p className='question-body'>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. And when a component update some data in it, its run the diff algorithm for finding what are different between current component and previous component and update only that modified part.</p>
      </div>
      <div className='questions'>
        <h2 className='question-title'>What is the difference between props and state?</h2>
        <p className='question-body'>State is Changable, and should be created in a component. State are use when we want to update and modified some data in a component. Props is used just for sending data to a child component. We can not change props value directly.</p>
      </div>
      <div className='questions'>
        <h2 className='question-title'>What is the use of useEffect other than fetching data?</h2>
        <p className='question-body'><strong>Run useEffect on State Change :</strong> By default, useEffect runs after every render, but it’s also perfect for running some code in response to a state change. You can limit when the effect runs by passing the second argument to useEffect. <strong>Run useEffect When a Prop Changes :</strong> Just as we were able to set up useEffect to run when a state variable changed, the same can be done with props. Remember they’re all regular variables! useEffect can trigger on any of them.</p>
      </div>
    </div>
  );
};

export default Questions;
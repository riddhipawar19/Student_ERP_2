import React from 'react';
import enroll_now from './images/enroll_now.jpg'
import './EnrollNow.css'

function EnrollNow() {
  return <div className="enroll_now" id="enroll_now">
    <img src={enroll_now}/>
    <div className='enroll_now_content'>Hello</div>
  </div>;
}

export default EnrollNow;

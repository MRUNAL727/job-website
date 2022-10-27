import React from 'react';
import './advertise.css';

const Advertise = () => {
  return (
    <div className="advertise">
      <div className="jobs">
        <div className="box">
          <div className="imgDiv">
            <img src="images/jobMan.png" className="images" />
          </div>
          <div className="textDiv">
            <h2 style={{ textAlign: 'center' }}>Want a job?</h2>
            <button className="advertiseButtons">Search Jobs</button>
          </div>
        </div>
        <div className='box'>
          <div className="imgDiv">
            <img src="images/jobMan.png" className="images" />
          </div>
          <div className="textDiv">
            <h2 style={{ textAlign: 'center' }}>Want to hire?</h2>
            <button className="advertiseButtons">Post Jobs for free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;

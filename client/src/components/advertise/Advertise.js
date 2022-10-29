import React from 'react';
import './advertise.css';
import { useNavigate } from 'react-router-dom'

const Advertise = () => {

  const navigate = useNavigate();

  return (
    <div className="advertise">
      <div className="jobs">
        <div className="box">
          <div className="imgDiv">
            <img src="images/job.jpg" className="images" />
          </div>
          <div className="textDiv">
            <h2 style={{ textAlign: 'center' }}>Want a job?</h2>
            <button className="advertiseButtons" onClick={()=>navigate('/all-jobs')}>Search Jobs</button>
          </div>
        </div>
        <div className='box'>
          <div className="imgDiv">
            <img src="images/jobHire.jpeg" className='images' />
          </div>
          <div className="textDiv">
            <h2 style={{ textAlign: 'center' }}>Want to hire?</h2>
            <button className="advertiseButtons" onClick={()=>navigate('/post-job')}>Post Jobs for free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;

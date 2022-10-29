import React from 'react';
import './advertise.css';
import { useNavigate, Link } from 'react-router-dom';

const Advertise = () => {
  const navigate = useNavigate();

  return (
    <div className="advertise">
      {/* <div className="jobs">
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
      </div> */}
      <h1>Search for a Job or post Job</h1>
      <div
        style={{
          display: 'flex',
          width: '50%',
          justifyContent: 'space-evenly',
          boxShadow: '0px 4px 10px rgba(0 76 255 / 10%)',
          margin: 30,
          padding:20
        }}
      >
        <Link to="/all-jobs" className="links">
          <div className="option">
            <h2 style={{ textAlign: 'center' }}>Want a job?</h2>
            <button className="adButtons">Search Job</button>
          </div>
        </Link>

        <Link to="/post-job" className="links">
          <div className="option">
            <h2 style={{ textAlign: 'center' }}>Want to hire??</h2>
            <button className="adButtons">Post Job</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Advertise;

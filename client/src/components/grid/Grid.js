import React from 'react';
import './grid.css';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Link } from 'react-router-dom';

const Grid = () => {
  return (
    <div>
      <div className="grids">
        <div className="grid">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <WorkOutlineIcon style={{ color: '#0E3386', paddingRight: 10 }} />
            <h3 style={{ fontSize: 25, color: '#0E3386' }}>
              Full Stack Web Development Jobs
            </h3>
          </div>
          <h5 style={{ color: 'grey', margin: 0 }}>XYZ technologies</h5>
          <h4 style={{ color: 'grey' }}>Experience: 3 to 5 years</h4>
          <Link to="all-jobs" className="viewMore">
            View more..
          </Link>
        </div>

        <div className="grid">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <WorkOutlineIcon style={{ color: '#0E3386', paddingRight: 10 }} />
            <h3 style={{ fontSize: 25, color: '#0E3386' }}>
              Full Stack Web Development Jobs
            </h3>
          </div>
          <h5 style={{ color: 'grey', margin: 0 }}>XYZ technologies</h5>
          <h4 style={{ color: 'grey' }}>Experience: 3 to 5 years</h4>
          <Link to="all-jobs" className="viewMore">
            View more..
          </Link>
        </div>

        <div className="grid">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <WorkOutlineIcon style={{ color: '#0E3386', paddingRight: 10 }} />
            <h3 style={{ fontSize: 25, color: '#0E3386' }}>
              Full Stack Web Development Jobs
            </h3>
          </div>
          <h5 style={{ color: 'grey', margin: 0 }}>XYZ technologies</h5>
          <h4 style={{ color: 'grey' }}>Experience: 3 to 5 years</h4>
          <Link to="all-jobs" className="viewMore">
            View more..
          </Link>
        </div>

        <div className="grid">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <WorkOutlineIcon style={{ color: '#0E3386', paddingRight: 10 }} />
            <h3 style={{ fontSize: 25, color: '#0E3386' }}>
              Full Stack Web Development Jobs
            </h3>
          </div>
          <h5 style={{ color: 'grey', margin: 0 }}>XYZ technologies</h5>
          <h4 style={{ color: 'grey' }}>Experience: 3 to 5 years</h4>
          <Link to="all-jobs" className="viewMore">
            View more..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grid;

import React from 'react';
import './grid.css';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Grid = () => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#fef9f4',
        width: '60%',
        margin: '60px auto',
        padding: 30,
        height: 300,
        position: 'relative',
        borderRadius: '16px 6px'
      }}
    >
      <div>
        <img src="https://static.naukimg.com/s/0/0/i/role-collection.png" />
        <h2>Discover jobs across popular roles</h2>
      </div>
      <div className="grids">
        <div className="grid">
          <Link
            to="/all-jobs"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{}}>
              <h3 style={{ margin: 5 }}>FullStack Development</h3>
              <p
                style={{
                  margin: 5,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'grey',
                }}
              >
                2.5k+ Jobs
                <ArrowForwardIosIcon style={{ fontSize: 18, padding: 3 }} />
              </p>
            </div>
          </Link>
        </div>

        <div className="grid">
          <Link
            to="/all-jobs"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{}}>
              <h3 style={{ margin: 5 }}>FullStack Development</h3>
              <p
                style={{
                  margin: 5,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'grey',
                }}
              >
                2.5k+ Jobs
                <ArrowForwardIosIcon style={{ fontSize: 18, padding: 3 }} />
              </p>
            </div>
          </Link>
        </div>

        <div className="grid">
          <Link
            to="/all-jobs"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{}}>
              <h3 style={{ margin: 5 }}>FullStack Development</h3>
              <p
                style={{
                  margin: 5,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'grey',
                }}
              >
                2.5k+ Jobs
                <ArrowForwardIosIcon style={{ fontSize: 18, padding: 3 }} />
              </p>
            </div>
          </Link>
        </div>

        <div className="grid">
          <Link
            to="/all-jobs"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{}}>
              <h3 style={{ margin: 5 }}>FullStack Development</h3>
              <p
                style={{
                  margin: 5,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'grey',
                }}
              >
                2.5k+ Jobs
                <ArrowForwardIosIcon style={{ fontSize: 18, padding: 3 }} />
              </p>
            </div>
          </Link>
        </div>

        <div className="grid">
          <Link
            to="/all-jobs"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{}}>
              <h3 style={{ margin: 5 }}>FullStack Development</h3>
              <p
                style={{
                  margin: 5,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'grey',
                }}
              >
                2.5k+ Jobs
                <ArrowForwardIosIcon style={{ fontSize: 18, padding: 3 }} />
              </p>
            </div>
          </Link>
        </div>

        <div className="grid">
          <Link
            to="/all-jobs"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{}}>
              <h3 style={{ margin: 5 }}>FullStack Development</h3>
              <p
                style={{
                  margin: 5,
                  display: 'flex',
                  alignItems: 'center',
                  color: 'grey',
                }}
              >
                2.5k+ Jobs
                <ArrowForwardIosIcon style={{ fontSize: 18, padding: 3 }} />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grid;

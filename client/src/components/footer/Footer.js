import React from 'react';
import './footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import BarChartIcon from '@material-ui/icons/BarChart';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className='name'>
            <BarChartIcon  className='icon'/>
            <h2>Jobs</h2>
          </div>
          <button className="btn">Contact us</button>
        </div>
        <div className="icons">
          <InstagramIcon className="icon" />
          <FacebookIcon className="icon" />
          <GitHubIcon className="icon" />
          <TwitterIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

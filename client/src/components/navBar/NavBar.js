import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  makeStyles,
  Button,
  AppBar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { useState } from 'react';
import Register from '../register/Register.js';
import clsx from 'clsx';
import BarChartIcon from '@material-ui/icons/BarChart';
import { useNavigate } from 'react-router';
import './navbar.css';
import { useSelector } from 'react-redux';
const useStyles = makeStyles({
  navElements: {
    display: 'flex',
    //  fontSize: 40,
    marginLeft: 'auto',
    marginRight: 50,
  },

  appBar: {
    display: 'flex',
    height: '80px',
    width: '99%',
    alignItems: 'center',
    // border: '1px solid grey',
    background: 'white',
    flexDirection: 'row',
    margin: '5px auto',
    padding: 5,
    position: 'static',
    boxShadow: '0px 4px 10px rgba(0 76 255 / 13%)',

    // opacity:0.8
  },

  link: {
    textDecoration: 'none',
     color: '#4fadff',
    fontSize: 22,
    padding: '7px 25px',
  },

  // job:{
  //   fontSize:30,
  //   marginLeft:100
  // }
});

const NavBar = () => {
  const classes = useStyles();
  const Navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const loggedin = useSelector((state)=> state.company.isLoggedin)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    Navigate('/');
  };

  return (
    <AppBar className={classes.appBar}>
      <Box className="logo" onClick={() => Navigate('/')}>
        <BarChartIcon style={{ fontSize: 30, color:'#4fadff' }} />
        <Typography
          style={{ fontSize: 30, fontWeight: 'bold', color: '#4fadff' }}
        >
          Jobs
        </Typography>
      </Box>
      <Box className={classes.navElements}>
        <Link
          to="/register"
          onClick={handleClickOpen}
          className={clsx(classes.link, classes.element)}
        >
          {' '}
          Register
        </Link>
        <Register open={open} onClose={handleClose} />

        {/* <Link to='/' className={classes.link}>Home</Link> */}

        {/* <Link to='/profile' className={classes.link} >Profile</Link> */}

        <Link to="/post-job" className={classes.link}>
          Post Job
        </Link>

       {!loggedin && <Link to="/login" className={classes.link} 
        style={{color:'white', backgroundColor:'rgb(254,200,145)', borderRadius:5, padding:'6px 25px'}}>
          Login
        </Link>
       }
       {
         loggedin && <Link to="/" className={classes.link} 
        style={{color:'white', backgroundColor:'rgb(254,200,145)', borderRadius:5, padding:'6px 25px'}}>
          Logout
        </Link>
       }
      </Box>
    </AppBar>
  );
};

export default NavBar;

import {Link} from 'react-router-dom'
import {Box, Typography, makeStyles, Button, AppBar, Menu, MenuItem} from '@material-ui/core';
import { useState } from 'react';
import Register from '../register/Register.js'
import clsx from 'clsx'
import BarChartIcon from '@material-ui/icons/BarChart';
import { useNavigate } from 'react-router';
import './navbar.css'

const useStyles = makeStyles({
    
   navElements:{
     display: 'flex',
    //  fontSize: 40,
     marginLeft:'auto',
     marginRight:50
  },
    
   
   
    appBar:{
      display:'flex', 
      height:'80px',
      width:'99%',
      alignItems:'center',
      // border: '1px solid grey', 
      background:'#4fadff',
      flexDirection: 'row',
      margin: '5px auto',
      padding:5,
      position: 'static',
      // opacity:0.8
    },

    link:{
      textDecoration:'none',
      
      fontSize: 22,
      padding:7,
      color:'white'
    
    },

    // job:{
    //   fontSize:30,
    //   marginLeft:100
    // }


})

const NavBar= ()=>{

  const classes = useStyles();
  const Navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    Navigate('/')
  };

 
  return(
      <AppBar className={classes.appBar}> 

      <Box className='logo' onClick={()=>Navigate('/')}>
        <BarChartIcon style={{fontSize:30}}/>
        <Typography style={{fontSize:30, fontWeight:'bold'}}>Jobs</Typography>
      </Box>
      <Box className={classes.navElements}>
       
        <Link to='/register' onClick={handleClickOpen} className={clsx(classes.link, classes.element)}> Register
          </Link>
           <Register open={open}  onClose={handleClose} />


        {/* <Link to='/' className={classes.link}>Home</Link> */}

         {/* <Link to='/profile' className={classes.link} >Profile</Link> */}

         <Link to='/post-job' className={classes.link}>Post Job</Link>

         <Link to='/login' className={classes.link}>Login</Link>
      </Box>

      
       </AppBar> 
  )
}

export default NavBar;
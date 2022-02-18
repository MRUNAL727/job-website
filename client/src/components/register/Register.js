import {Box, Typography, Button,  makeStyles, Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';



const useStyles = makeStyles({

  dialogContainer:{
    //  padding: '10px 80px',
     textDecoration: 'none',
     textAlign: 'center'
  }, 

  user:{
    textDecoration: 'none',
    color: 'blue' ,
    fontSize: 30,
    padding: '20px 20px'
  },

  
  

  company:{
    textDecoration: 'none',
    color: 'blue' ,
    fontSize: 30,
    padding: '20px 20px'
  }
})
const Register=(props)=>{
    const classes = useStyles();

    const {  onClose, open } = props;

    const handleClose = (e) => {
       onClose(e)
    };

    const handleListItemClick = (value) => {
      onClose(value);
    };

  return(
     <Dialog open={open} className={classes.dialogContainer} onClose={handleClose} >
            <DialogTitle >
               <Typography style={{fontSize: 35, fontWeight: 'bold'}}>Register
               <CloseIcon onClick={handleClose} style={{float:'right', marginTop: 1, marginRight: '-12px'}} />
               </Typography>
             </DialogTitle>

             <DialogContent>
                 <Link to="/register/user" style={{textDecoration: 'none'}}>
                   <Typography className={classes.user} onClick={() => handleListItemClick()}>User registration</Typography>
                 </Link>

                 <Link to="/register/company" style={{textDecoration: 'none'}}>
                   <Typography className={classes.company} onClick={() => handleListItemClick()}>Company registration</Typography>
                 </Link>
             </DialogContent>
         
        </Dialog>
  )

}

export default Register;
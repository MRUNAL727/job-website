import {TextField, Box, makeStyles, Typography, Button}  from '@material-ui/core';
import clsx from 'clsx';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({

  box:{
     width: '30%',
     margin: 'auto',
     border: '1px solid black',
      
  },

   textField:{
    width: 300,
    margin: '25px 5px 10px 20px',
    fontSize: 150
    
   },

   heading:{
     textAlign: 'center',
     fontSize: 50,
     marginTop: 20
   },
 
   formContainer:{
    //  border: '1px solid black',
     marginLeft: 20,
     
   },
   name:{
    //  width: 250,
   }
})

const UserRegistration=()=>{

   const [user, setUser] = useState({
      firstName: '',
      lastName:'',
       email:'',
       phone:'',
       password:''
   });
   const classes = useStyles();
    const navigate = useNavigate();
   const handleChange=(event)=>{
      setUser({...user, [event.target.name]: event.target.value})
   }

   const createUser= async()=>{
      try{
        await axios.post('/api/login/user', user).then(
           navigate('/')
        ) 
      }
      catch(err){
         console.log(err)
      }
   }

  return(
      <Box className={classes.box}>
         <Typography className={classes.heading}>User Registration</Typography>
         
         <Box className={classes.formContainer}>

            <Box>
              <TextField label="First name" variant="standard"
                 required className={clsx(classes.textField, classes.name)} 
                 onChange={handleChange} name="firstName"/>
             
              <TextField label="Last name" variant="standard" 
                required className={clsx(classes.textField, classes.name)}
                onChange={handleChange} name="lastName"
              />
            </Box>

            <Box>
               <TextField label="Email" variant="standard"  
                  required className={clsx(classes.textField)}
                  onChange={handleChange} name="email"
                />

               <TextField label="Phone" variant="standard" type="number" 
                  required className={clsx(classes.textField)}
                  onChange={handleChange} name="phone"
               />

               <TextField label="Password" variant="standard" type="password" 
                  required className={clsx(classes.textField)}
                  onChange={handleChange} name="password"
                />

               
            </Box>
            <Button onClick={createUser}>
               <Typography>Submit</Typography>
            </Button>
         </Box>
     </Box>
  )
}

export default UserRegistration;
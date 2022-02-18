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

const UserLogin=()=>{

   const [err, setErr] = useState('');

   const [company, setCompany] = useState({
       name: '',
       email:'',
       phone:'',
       password:''
   });
   const classes = useStyles();
    const navigate = useNavigate();
   const handleChange=(event)=>{
      setCompany({...company, [event.target.name]: event.target.value})
   }

   const createCompany= async()=>{
      try{
        await axios.post('/register/company', company).then((response)=>{
           if(response.status ===200){
            //   arr.push('Registered successfully')
            setErr('Registered successfully')
           navigate('/') 
           }
          
          }
        ) 
      }
      catch(err){
         setErr("Please enter correct details")
         console.log("error")
      }
   }

  return(
      <Box className={classes.box}>
         <Typography className={classes.heading}>Company Registration</Typography>
         
         <Box className={classes.formContainer}>

            <Box>
              <TextField label="Company name" variant="standard"
                 required className={clsx(classes.textField, classes.name)} 
                 onChange={handleChange} name="name"/>
             
              
            </Box>

            <Box>
               <TextField label="Email" variant="standard"  
                  required className={clsx(classes.textField)}
                  onChange={handleChange} name="email"
                />

               <TextField label="Number" variant="standard" type="number" 
                  required className={clsx(classes.textField)}
                  onChange={handleChange} name="phone"
               />

               <TextField label="Password" variant="standard" type="password" 
                  required className={clsx(classes.textField)}
                  onChange={handleChange} name="password"
                />

               
            </Box>
            <Button onClick={createCompany}>
               <Typography>Submit</Typography>
            </Button>
         </Box>
          
           
                <Typography>{err}</Typography>
             
          
     </Box>
  )
}

export default UserLogin;
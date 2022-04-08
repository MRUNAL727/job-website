import {Box, TextField, Typography, Button} from '@material-ui/core';
import axios from 'axios'
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { companyContext } from '../context/company/companyContext';
import jwtDecode from 'jwt-decode'
import { useLocation } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import PostJob from './job/PostJob';


const Login= ()=>{
    const navigate = useNavigate();
    const { dispatch } = useContext(companyContext);
    const company = useContext(companyContext);
    let location = useLocation();

    console.log(location.pathname)

   
    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })
    const handleChange=(event)=>{
         setLoginData({...loginData, [event.target.name]: event.target.value})
        // console.log(loginData)
    }

    const handleCancel=()=>{
        navigate('/')
    }

    const handleClick=()=>{
        axios.post('/login', loginData).then((response)=>{

          const decoded = jwtDecode(response.data.accessToken)
            dispatch({ type: "LOGIN_START" });

            if(decoded.email){
            dispatch({ type: "LOGIN_SUCCESS", payload: decoded.email });
                navigate('/post-job');
            }
            else{
           dispatch({ type: "LOGIN_FAILURE" });
                navigate('/login');
                console.log('else')

            }
        })
    }
    return(
    <Box style={{paddingTop:100, backgroundColor: '#f0f0f5', height:'100vh'}}>
        <Box style={{margin:'auto', width:'30%', 
           borderRadius: 4, height:'40vh',
        border:'1px solid black' , backgroundColor:'#fff', boxShadow: '0px 30px 50px 0px rgba(0, 0, 0, 0.2)'}}>
        <Typography style={{fontWeight: 'bold', textAlign:'center', fontSize:30, padding:40}}>Login</Typography>

         <Box style={{margin:'auto', width:'80%'}}>
               <TextField id="outlined-basic" required label="Email" 
                 name="email" variant="outlined" style={{padding:10, width:'410px'}} onChange={handleChange}/> 

               <TextField id="outlined-basic" label="password" required style={{padding:10, width:410}} 
                 name="password" variant="outlined" type='password' onChange={handleChange}/>
         </Box>

         <Box style={{margin:'auto', padding:20, width:'60%'}}>
           <Button onClick={handleCancel} style={{backgroundColor:'#007FFF', margin:2, height:45,
            color:'#fff', width:'45%', padding:'5px 10px'}}>Cancel</Button>
           <Button onClick={handleClick} style={{width:'45%', padding:'5px 10px', color:'#fff', margin:2, height:45,
            backgroundColor:'#007FFF'}}>Login</Button>
         </Box>
        </Box>
        {  
          (location === '/post-job' && company.company) ? <PostJob /> : '' 
        }
        </Box>
    )
}


export default Login;
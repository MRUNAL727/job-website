import {Box, TextField, Typography, Button} from '@material-ui/core';
import axios from 'axios'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { companyContext } from '../context/company/companyContext';
import jwtDecode from 'jwt-decode'

const Login= ()=>{
    const navigate = useNavigate();
    const { dispatch } = useContext(companyContext);


    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })
    const handleChange=(event)=>{
         setLoginData({...loginData, [event.target.name]: event.target.value})
        // console.log(loginData)
         
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
        <Box style={{padding:100, color:'black'}}>
        <Typography>Login</Typography>
         <Box>
            <TextField id="outlined-basic" label="Email" required
                name="email" variant="outlined" onChange={handleChange}/>

             <TextField id="outlined-basic" label="password" required
                name="password" variant="outlined" type='password' onChange={handleChange}/>

         </Box>
           <Button onClick={handleClick}>Login</Button>
        </Box>
    )
}


export default Login;
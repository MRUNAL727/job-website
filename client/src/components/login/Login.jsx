import { Box, TextField, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { companyContext } from '../../context/company/companyContext';
import jwtDecode from 'jwt-decode';
import { useLocation, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import PostJob from '../job/PostJob';
import './login.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(companyContext);
  const company = useContext(companyContext);
  let location = useLocation();
  const [message, setMessage] = useState({
    msg: '',
    color: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
    // console.log(loginData)
  };

  const handleCancel = () => {
    navigate('/post-job');
  };

 console.log(location.pathname)


  const handleClick = (event) => {
  
    axios.post('/login', loginData).then((response) => {
      console.log(response.data)
      if (response.data.accessToken != '') {
        const decoded = jwtDecode(response.data.accessToken);
        setMessage({ msg: response.data.msg, color: response.data.color });
        console.log(response.data.accessToken);
        dispatch({ type: 'LOGIN_START' });

        if (decoded.email) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: decoded.email });
          if(location.pathname === '/post-job')
          {
            navigate('/post-job')
          }
          else{
            navigate('/')
          }
          window.location.reload();
        } else {
          dispatch({ type: 'LOGIN_FAILURE' });
          navigate('/login');
          console.log('else');
        }
      }
    });
  };
  return (
    <Box
      style={{
        marginTop: 50,
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container">
        <Box className="loginContainer">
          <Typography
            className="heading"
            style={{ fontSize: 40, marginBottom: 25 }}
          >
            Login
          </Typography>
          <AccountCircleIcon className="loginIcon" style={{ fontSize: 50 }} />
          <Typography style={{ color: message.color }}>
            {message.msg}
          </Typography>
          <Box>
            <div className="inputDiv">
              <MailOutlineIcon className="icon" />
              <input
                required
                className="input"
                placeholder="Enter email"
                name="email"
                variant="outlined"
                onChange={handleChange}
              />
            </div>

            <div className="inputDiv">
              <LockOutlinedIcon className="icon" />
              <input
                required
                className="input"
                placeholder="Enter password"
                name="password"
                variant="outlined"
                type="password"
                onChange={handleChange}
              />
            </div>
          </Box>

          <Box className="buttons">
            <button onClick={handleCancel} className="button">
              Cancel
            </button>
            <button onClick={handleClick} className="button">
              Login
            </button>
          </Box>

          <Box style={{margin:20,  width: '70%'}}>
            <Link to='/register/company' style={{color:'#4fadff'}}>Create new account</Link>
          </Box>
        </Box>

        <div className="imgContainer">
          <img src="images/companyLogin.jpg" className="img" />
        </div>
        
        
  
      </div>
    </Box>
  );
};

export default Login;

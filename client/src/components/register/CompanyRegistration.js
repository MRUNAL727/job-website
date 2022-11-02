import {
  TextField,
  Box,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import clsx from 'clsx';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BusinessIcon from '@material-ui/icons/Business';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const UserLogin = () => {
  const [err, setErr] = useState('');

  const [company, setCompany] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    setCompany({ ...company, [event.target.name]: event.target.value });
  };

  const createCompany = async () => {
    try {
      await axios
        .post('http://localhost:8000/register/company', company)
        .then((response) => {
          if (response.status === 200) {
            //   arr.push('Registered successfully')
            setErr('Registered successfully');
            navigate('/');
          }
        });
    } catch (err) {
      setErr('Please enter correct details');
      console.log('error');
    }
  };

  return (
    <Box
      style={{
        width: '50%',
        margin: '50px auto',
        boxShadow: '0px 4px 10px rgba(0, 76, 255, 0.341)',
      }}
    >
      <Box
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',

            color: '#4fadff',

            marginTop: 20,
          }}
        >
          <BusinessIcon
            style={{ fontSize: 30, marginTop: 20, padding: '0px 10px' }}
          ></BusinessIcon>

          <Typography style={{ fontSize: 30, marginTop: 20 }}>
            Company Registration
          </Typography>
        </Box>

        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            justifyContent: 'center',
          }}
        >
          <TextField
            label="Company name"
            variant="outlined"
            required
            onChange={handleChange}
            name="name"
            style={{
              margin: 20,
              boxShadow: '0px 4px 10px rgba(0, 76, 255, 0.17)',
            }}
          />

          <TextField
            label="Email"
            variant="outlined"
            required
            onChange={handleChange}
            name="email"
            style={{
              margin: 20,
              boxShadow: '0px 4px 10px rgba(0, 76, 255, 0.17)',
            }}
          />

          <TextField
            label="Number"
            variant="outlined"
            type="number"
            required
            onChange={handleChange}
            name="phone"
            style={{
              margin: 20,
              boxShadow: '0px 4px 10px rgba(0, 76, 255, 0.17)',
            }}
          />

          <Box
            style={{
              display: 'flex',
              padding: '5px 14px',

              alignItems: 'center',
              margin: 20,
              border: '1px solid #8080806e',
              borderRadius: 5,
              boxShadow: '0px 4px 10px rgba(0, 76, 255, 0.17)',
            }}
          >
            <TextField
              label="Password"
              // variant="outlined"
              type="password"
              required
              onChange={handleChange}
              name="password"
              style={{
                outline: 'none',
                border: 'none',
              }}
            />
            <VisibilityOffIcon />
          </Box>

          <Button
            onClick={createCompany}
            style={{
              backgroundColor: '#4fadff',
              color: 'white',

              borderRadius: 5,
              padding: '5px 30px',
              margin: '20px auto',
              boxShadow: '0px 4px 10px rgba(0, 76, 255, 0.17)',
            }}
          >
            <Typography>Submit</Typography>
          </Button>
        </Box>

        <Typography>{err}</Typography>
      </Box>
    </Box>
  );
};

export default UserLogin;

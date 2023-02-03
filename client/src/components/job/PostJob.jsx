import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
} from '@material-ui/core';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
// import { ContextProvider } from '../../context/company/companyContext';
// import { companyContext } from '../../context/company/companyContext.js';
import { AddPhotoAlternate } from '@material-ui/icons';

const PostJob = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const navigate = useNavigate();
  const formData = new FormData();
  // let category= [ ];
  const [category, setCategory] = useState([]);

  // const company = useContext(companyContext);

  const [jobType, setJobType] = useState('');
  const [companyName, setcompanyName] = useState('');
  const [aboutCompany, setaboutCompany] = useState('');
  const [jobDiscription, setjobDiscription] = useState('');
  const [skillsRequired, setskillsRequired] = useState('');
  const [whoCanApply, setwhoCanApply] = useState('');
  const [perks, setperks] = useState('');
  const [noOfOpenings, setnoOfOpenings] = useState('');
  const [startDate, setstartDate] = useState('');
  const [duration, setduration] = useState('');
  const [stipend, setstipend] = useState('');
  const [applyBy, setapplyBy] = useState('');
  const [email, setemail] = useState('');
  const [logo, setLogo] = useState();
  const [workFromHome, setworkFromHome] = useState(false);
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');


  // const [job, setJob] =  useState({
  //     jobType: '',
  //     companyName:'',
  //     aboutCompany:'',
  //     jobDiscription:'',
  //     skillsRequired:'',
  //     whoCanApply: '',
  //     perks:'',
  //     noOfOpenings:'',
  //     startDate:'',
  //     duration:'',
  //     stipend:'',
  //     applyBy:'',
  //     email:'',
  //     // workFromHome: false,
  //     // location:'',
  //     // categories:[]
  // })

  // const handleChange=(event)=>{
  //   // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

  //   setJob({...job, [event.target.name] : event.target.value});
  //    console.log(job)
  // }

  const cancel = () => {
    setJobType('');
    //   setJob({
    //     jobType: '',
    //     companyName:'',
    //     aboutCompany:'',
    //     jobDiscription:'',
    //     skillsRequired:'',
    //     whoCanApply: '',
    //     perks:'',
    //     noOfOpenings:'',
    //     startDate:'',
    //     duration:'',
    //     stipend:'',
    //     applyBy:'',
    //     email:'',
    //     // location:'',
    //     // categories:[]
    //   })
    navigate('/');
  };

  const handleCategories = (event) => {
    setCategory((category) => [...category, event.target.value]);
  };

  const appendData = () => {
    if (workFromHome === true) {
      setLocation('false');
    } else {
      formData.append('location', location);
      setworkFromHome(false);
    }
    formData.append('jobType', jobType);
    formData.append('companyName', companyName);
    formData.append('aboutCompany', aboutCompany);
    formData.append('jobDiscription', jobDiscription);
    formData.append('skillsRequired', skillsRequired);
    formData.append('whoCanApply', whoCanApply);
    formData.append('perks', perks);
    formData.append('noOfOpenings', noOfOpenings);
    formData.append('startDate', startDate);
    formData.append('stipend', stipend);
    formData.append('applyBy', applyBy);
    formData.append('email', email);
    formData.append('logo', logo);
    formData.append('workFromHome', workFromHome);
  };

  console.log(jobType)

  const submit = async () => {
    appendData();
    const res = await axios.post('/post-job', formData);
    console.log(res)
  };

  // const handleLocation= (event)=>{
  //    setLocation(event.target.value)
  //   setJob({...job, location: location});
  // }

  const handlejobType = (event) => {
    setJobType(event.target.value);
  };
  const handlecompanyName = (event) => {
    setcompanyName(event.target.value);
  };
  const handleaboutCompany = (event) => {
    setaboutCompany(event.target.value);
  };
  const handlejobDiscription = (event) => {
    setjobDiscription(event.target.value);
  };
  const handleskillsRequired = (event) => {
    setskillsRequired(event.target.value);
  };
  const handlewhoCanApply = (event) => {
    setwhoCanApply(event.target.value);
  };
  const handleperks = (event) => {
    setperks(event.target.value);
  };
  const handlenoOfOpeninngs = (event) => {
    setnoOfOpenings(event.target.value);
  };
  const handlestatrDate = (event) => {
    setstartDate(event.target.value);
  };
  
  const handlestipend = (event) => {
    setstipend(event.target.value);
  };
  const handleapplyBy = (event) => {
    setapplyBy(event.target.value);
  };
  const handleemail = (event) => {
    setemail(event.target.value);
  };
  const handleLogo = (event) => {
    setLogo(event.target.files[0]);
  };
  const handleworkFromHome = (event) => {
    workFromHome === false ? setworkFromHome(true) : setworkFromHome(false);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Box
      style={{
        width: '60%',
        margin: 'auto',
        marginTop: 20,
        boxShadow: '0px 4px 10px rgba(0 76 255 /20%)',
      }}
    >
      <Typography
        style={{
          textAlign: 'center',
          fontSize: 40,
          padding: 20,
          color: '#4fadff',
        }}
      >
        Create job
      </Typography>

      <Box style={{ display: 'block', padding: '10px 50px' }}>
        <Box style={{ display: 'flex', width: '100%' }}>
        <Box style={{ padding: '', width: 300, margin: '10px auto' }}>
            {/* <InputLabel>Job Type</InputLabel> */}
            <FormControl
              variant="outlined"
              style={{ width: '100%' }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Job Title
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="jobType"
                onChange={handlejobType}
                style={{ width: '100%' }}
              >
                <MenuItem value={'web development'}>Web development</MenuItem>
                <MenuItem value={'nodejs'}>Node js</MenuItem>
                <MenuItem value={'backend development'}>
                  Backend development
                </MenuItem>
                <MenuItem value={'full stack development'}>
                  Full stack development
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            id="outlined-basic"
            label="Company name"
            variant="outlined"
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
            onChange={handlecompanyName}
            name="companyName"
          />
        </Box>

        <Box style={{ display: 'flex' }}>
          <TextField
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
            id="outlined-basic"
            label="Start date"
            required
            name="startDate"
            variant="outlined"
            onChange={handlestatrDate}
          />
          
          <TextField
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
            id="outlined-basic"
            label="Salary"
            required
            name="stipend"
            variant="outlined"
            onChange={handlestipend}
          />
          <TextField
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
            id="outlined-basic"
            label="Apply by"
            required
            name="applyBy"
            variant="outlined"
            onChange={handleapplyBy}
          />
        </Box>

        <Box style={{ display: 'flex', flex: 1 }}>
          <TextField
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
            id="outlined-basic"
            label="Email"
            required
            name="email"
            variant="outlined"
            onChange={handleemail}
          />
        </Box>

        <Box style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="standard-multiline-static"
            label="About company"
            multiline
            rows={8}
            variant="standard"
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
              fontSize: 20,
            }}
            onChange={handleaboutCompany}
            name="aboutCompany"
          />
        </Box>

        <Box style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="standard-multiline-static"
            label="Job Discription"
            multiline
            rows={8}
            variant="standard"
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
              fontSize: 20,
            }}
            onChange={handlejobDiscription}
            name="jobDiscription"
          />
        </Box>

        <Box style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="standard-multiline-static"
            label="Skill(s) required"
            multiline
            rows={2}
            variant="standard"
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
            onChange={handleskillsRequired}
            name="skillsRequired"
          />
        </Box>

        <Box style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="standard-multiline-static"
            label="Who can apply"
            multiline
            rows={4}
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
            variant="standard"
            onChange={handlewhoCanApply}
            name="whoCanApply"
          />
        </Box>

        <Box style={{ display: 'flex', width: '100%' }}>
          <TextField
            id="standard-multiline-static"
            label="Perks"
            multiline
            rows={2}
            variant="standard"
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
            onChange={handleperks}
            name="perks"
          />
        </Box>

        <Box style={{ display: 'flex' }}>
          <Box
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
          >
            <TextField
              id="outlined-basic"
              label="Number of openings"
              variant="outlined"
              onChange={handlenoOfOpeninngs}
              name="noOfOpenings"
            />
          </Box>
          <Box
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
              border: '1px solid #8080806e',
              borderRadius: 4,
              color: 'grey',
              paddingLeft: 15,
            }}
          >
            <label
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
            >
              <input
                type={'file'}
                onChange={handleLogo}
                style={{ display: 'none' }}
              />
              <AddPhotoAlternate style={{ justifyContent: 'center' }} />
              <p>Upload logo</p>
            </label>
          </Box>

          <Box
            style={{
              flex: 1,
              border: '1px solid #8080806e',
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
              display: 'flex',
              borderRadius: 4,
              alignItems: 'center',
              color: 'grey',
              paddingLeft: 15,
            }}
          >
            {/* <FormControlLabel control={<Checkbox style={{color:'blue'}} />} label="Work from home" 
                name='workFromHome' onChange={handleChange} /> */}
            <label>Work from home</label>
            <Checkbox onChange={handleworkFromHome} />
          </Box>

          <Box
            style={{
              flex: 1,
              boxShadow: '0px 4px 10px rgba(0 76 255 /5%)',
              margin: '10px',
            }}
          >
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              onChange={handleLocation}
              name="location"
            />
          </Box>
        </Box>
      </Box>

      <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box style={{ padding: 20 }}>
          <Button
            onClick={submit}
            style={{
              color: 'white',
              backgroundColor: '#4fadff',
              padding: '5px 10px',
            }}
          >
            Create
          </Button>
        </Box>
        <Box style={{ padding: 20 }}>
          <Button
            onClick={cancel}
            style={{
              color: 'white',
              backgroundColor: '#4fadff',
              padding: '5px 10px',
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostJob;

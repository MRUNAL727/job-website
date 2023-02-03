import {
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormControl,
  Checkbox,
  Button,
} from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  clearFilters,
  addJobs,
  setFilters,
} from '../../context/filter/filterslice';
import { useDispatch, useSelector } from 'react-redux';

const Filters = () => {
  const [jobsList, setJobsList] = useState([]);
  const [query, setQuery] = useState('');
  let q = '';

  const [filters, addFilters] = useState({});
  // const [filteredJobs, setFilteredJobs] = useState([]);
  const [checked, setChecked] = useState(false);
  const [workFromHomeValue, setworkFromHomeValue] = useState(false);
  const [jobsFound, setJobsFound] = useState(true);

  const dispatch = useDispatch();

  const appliedFilters = useSelector((state) => state.filter.filters);
  const jobs = useSelector((state) => state.filter.jobsList);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get(`/api/all-jobs`);

        setJobsList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  const handleQuery = () => {
    const result = Object.entries(appliedFilters);
    console.log(appliedFilters);
    for (let i = 0; i < result.length; i++) {
      q += `${result[i][0]}=${result[i][1]}&`;
      console.log(q);
    }
    setQuery(q);
  };
  useEffect(() => {
    const getData = async () => {
      // console.log(Object.keys(query).length === 0);
      // if(Object.keys(query).length != 0){
      if (query) {
        const response = await axios.get(
          `/api/all-jobs?${query}`
        );
        console.log(response.data.length);
        if (response.data.length === 0) {
          setJobsFound(false);

          dispatch(addJobs([]));
        } else {
          dispatch(addJobs(response.data));
        }
        console.log(response);
      }
    };
    getData();
  }, [query]);

  useEffect(() => {
    const result = Object.entries(appliedFilters);
    console.log(appliedFilters);
    for (let i = 0; i < result.length; i++) {
      q += `${result[i][0]}=${result[i][1]}&`;
      console.log(q);
    }
    setQuery(q);
  }, [appliedFilters]);

  const handleApply = () => {
    dispatch(setFilters(filters));
    // handleQuery();
  };

  const handleClear = () => {
    // setInputLabel('Job Type');
    setFilters({});
    dispatch(clearFilters({}));
    window.location.reload(false);
  };

  const handleChange = async (event) => {
    addFilters({ ...filters, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Box
        style={{
          boxShadow: '0px 4px 10px rgba(0 76 255 / 13%)',
          flex: 1,
          borderRadius: 2,
          height: '70vh',
          position: 'sticky',
          top: 40,
        }}
      >
        <Typography
          style={{
            textAlign: 'center',
            padding: '15px 0px',
            color: 'blue',
            fontSize: 20,
          }}
        >
          Filters
        </Typography>

        <Box style={{ padding: '', width: 300, margin: '10px auto' }}>
          {/* <InputLabel>Job Type</InputLabel> */}
          <FormControl
            variant="outlined"
            style={{ width: '100%' }}
            // className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Job Title
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="jobType"
              onChange={handleChange}
              style={{ width: '100%' }}
            >
              <MenuItem value={'Web development'}>Web development</MenuItem>
              <MenuItem value={'Nodejs'}>Node js</MenuItem>
              <MenuItem value={'Backend development'}>
                Backend development
              </MenuItem>
              <MenuItem value={'Full stack development'}>
                Full stack development
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box style={{ padding: '', width: 300, margin: '10px auto' }}>
          {/* <InputLabel>Location</InputLabel> */}
          <FormControl
            variant="outlined"
            style={{ width: '100%' }}
            // className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
              // className={classes.category}
              name="location"
              style={{ width: '100%' }}
            >
              <MenuItem value={'Pune'}>Pune</MenuItem>
              <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
              <MenuItem value={'Delhi'}>Delhi</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box style={{ width: 290, margin: 'auto', padding: '10px 0px' }}>
          <Checkbox
            color="primary"
            name="workFromHome"
            value={workFromHomeValue ? false : true}
            onChange={handleChange}
          />
          <label style={{ fontSize: 20, color: '#646464' }}>
            Work from home
          </label>
        </Box>
        {/* <hr style={{ opacity: 0.2 }} /> */}

        <Box style={{ width: 290, margin: 'auto', padding: '10px 0px' }}>
          <Checkbox
            color="primary"
            name="partTime"
            value={checked ? false : true}
            onChange={handleChange}
          />
          <label style={{ fontSize: 20, color: '#646464' }}>Part-time</label>
        </Box>

        <Box style={{ width: 290, margin: 'auto', padding: '10px 0px' }}>
          <FormControl
            variant="outlined"
            style={{ width: '100%' }}
            // className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Experience
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
              // className={classes.category}
              name="experience"
              style={{ width: '100%' }}
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Expert">Expert</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* <hr style={{ opacity: 0.2 }} /> */}

        {/* <Box style={{ width: 290, margin: 'auto', padding: '10px 0px' }}>
            <Typography gutterBottom style={{ fontSize: 20, color: '#646464' }}>
              Minimum salary per month (₹)
            </Typography>
            <Slider
              ValueLabelComponent={ValueLabelComponent}
              aria-label="custom thumb label"
              defaultValue={0}
            />
          </Box> */}

        <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button
            style={{
              backgroundColor: '#4fadff',
              color: 'white',
              boxShadow: '0px 4px 10px rgba(0 76 255 / 13%)',
              marginTop: 50,
            }}
            onClick={handleClear}
          >
            Clear filters
          </Button>
          <Button
            style={{
              backgroundColor: '#4fadff',
              color: 'white',
              boxShadow: '0px 4px 10px rgba(0 76 255 / 13%)',
              marginTop: 50,
            }}
            onClick={handleApply}
          >
            Apply filters
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Filters;

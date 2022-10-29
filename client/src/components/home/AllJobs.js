import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  makeStyles,
  Card,
  CardContent,
  TextField,
  InputLabel,
  Select,
  Button,
  MenuItem,
  FormControl,
  Checkbox,
  Slider,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import Filters from './Filters';
import ReactPaginate from 'react-paginate';
import Paginationx from './Pagination.js';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Job from './Job';

const useStyle = makeStyles({
  category: {
    width: '80%',
  },
});

const AllJobs = () => {
  const classes = useStyle();
  const [jobsList, setJobsList] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [inputLabel, setInputLabel] = useState('');

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/all-jobs`);
        setJobsList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  console.log(jobsList);

  useEffect(() => {
    filters &&
      setFilteredJobs(
        jobsList.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item.workFromHome === false
              ? item[key].toLowerCase().toString().includes(value)
              : item.location === 'false' &&
                item[key].toLowerCase().toString().includes(value)
          )
        )
      );
  }, [filters]);
  // console.log(filters)

  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  console.log(pagination.start, pagination.end);
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
    // console.log(event.target.value)
  };

  const handleChange = (event) => {
    console.log(checkboxValue);
    if (event.target.name === 'workFromHome') {
      if (event.target.value === true) {
        setCheckboxValue(false);
      } else {
        setCheckboxValue(true);
      }
    }
    setFilters(
      event.target.name === 'workFromHome'
        ? { ...filters, workFromHome: checkboxValue } && filters.location
          ? delete filters.location
          : ''
        : { ...filters, [event.target.name]: event.target.value }
    );
  };

  const handleClear = () => {
    setInputLabel('Job Type');
    setFilters({});
  };
  return (
    <>
      <Box style={{ display: 'flex', width: '60%', margin: '50px auto' }}>
        {/* <Box> */}
        <Box
          style={{
            boxShadow: '0px 4px 10px rgba(0 76 255 / 13%)',
            flex: 1,
            borderRadius: 2,
            height: '80vh',
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
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Job Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="jobType"
                onChange={handleChange}
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

          <Box style={{ padding: '', width: 300, margin: '10px auto' }}>
            {/* <InputLabel>Location</InputLabel> */}
            <FormControl
              variant="outlined"
              style={{ width: '100%' }}
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                className={classes.category}
                name="location"
                style={{ width: '100%' }}
              >
                <MenuItem value="pune">Pune</MenuItem>
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box style={{ width: 290, margin: 'auto', padding:'10px 0px' }}>
            <label style={{ fontSize: 20, color: '#646464' }}>
              Work from home
            </label>
            <Checkbox
              color="primary"
              name="workFromHome"
              onChange={handleChange}
              value="uhduash"
            />
          </Box>
          {/* <hr style={{ opacity: 0.2 }} /> */}

          <Box style={{ width: 290, margin: 'auto', padding:'10px 0px'}}>
            <label style={{ fontSize: 20, color: '#646464' }}>Experience</label>
            <Slider value={0} aria-labelledby="continuous-slider" />
          </Box>
          {/* <hr style={{ opacity: 0.2 }} /> */}

          <Box style={{ width: '40%', margin: 'auto', bottom: '10px' }}>
            <Button
              style={{
                backgroundColor: '#4fadff',
                color: 'white',
                boxShadow: '0px 4px 10px rgba(0 76 255 / 13%)',
                marginTop: 30,
              }}
              onClick={handleClear}
            >
              Clear filters
            </Button>
          </Box>
        </Box>
        {/* </Box> */}
        <Box style={{ flex: 2, marginBottom: 10 }}>
          {filteredJobs.length > 0
            ? filteredJobs
                .slice(pagination.start, pagination.end)
                .map((job) => <Job job={job} key={job._id} />)
            : Object.keys(filters).length === 0 &&
              jobsList &&
              jobsList
                .slice(pagination.start, pagination.end)
                .map((job) => <Job job={job} key={job._id} />)}

          <Box
            style={{
              left: '50%',
              width: '30%',
              margin: 'auto',
              display: 'block',
            }}
          >
            <Paginationx
              style={{ left: '50%' }}
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
              total={jobsList.length}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AllJobs;

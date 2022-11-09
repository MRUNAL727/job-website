import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  makeStyles,
  InputLabel,
  Select,
  Button,
  MenuItem,
  FormControl,
  Checkbox,
  Slider,
} from '@material-ui/core';
import Paginationx from './Pagination.js';
import Job from './Job';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import {filterContext} from '../../context/filter/filterContext'

const useStyle = makeStyles({
  category: {
    width: '80%',
  },
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
const AllJobs = () => {
  const classes = useStyle();
  const [jobsList, setJobsList] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [workFromHomeValue, setworkFromHomeValue] = useState(true);
  const [partTimeValue, setPartTimeValue] = useState(true);
  const { dispatch } = useContext(filterContext)

  const [inputLabel, setInputLabel] = useState('');
  const [filters, setFilters] = useState({});

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

  useEffect(() => {
    filters &&
      setFilteredJobs(
        jobsList.filter((item) =>
          Object.entries(filters).every(
            ([key, value]) =>
              // item.workFromHome === false
              //   ? (item[key]).toLowerCase().includes(value)
              //   : item.location === 'false' &&
              item[key].toString().toLowerCase().includes(value)
            // {console.log('key ' + item[key] + ' ' + value); }
          )
        )
      );
  }, [filters]);

  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  // console.log(pagination.start, pagination.end);
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
    // console.log(event.target.value)
  };

  const handleChange = (event) => {
    console.log(workFromHomeValue);
    if (event.target.name === 'workFromHome') {
      if (workFromHomeValue === true) {
        setworkFromHomeValue(false);
      } else {
        setworkFromHomeValue(true);
      }
    }
    setFilters(
      // event.target.name === 'workFromHome'
      //   ? { ...filters, workFromHome: workFromHomeValue } && filters.location
      //     ? delete filters.location
      //     : ''
      //   :


      // { ...filters, [event.target.name]: event.target.value }
      dispatch({action:'SET_FILTERS', payload:{ ...filters, [event.target.name]: event.target.value }})
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
              className={classes.formControl}
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

          <Box style={{ width: 290, margin: 'auto', padding: '10px 0px' }}>
            <Checkbox
              color="primary"
              name="workFromHome"
              value={workFromHomeValue}
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
              value={partTimeValue}
              onChange={handleChange}
            />
            <label style={{ fontSize: 20, color: '#646464' }}>Part-time</label>
          </Box>

          <Box style={{ width: 290, margin: 'auto', padding: '10px 0px' }}>
            <Typography gutterBottom style={{ fontSize: 20, color: '#646464' }}>
              Experience
            </Typography>
            <Slider
              ValueLabelComponent={ValueLabelComponent}
              aria-label="custom thumb label"
              defaultValue={0}
            />
          </Box>
          {/* <hr style={{ opacity: 0.2 }} /> */}

          <Box style={{ width: 290, margin: 'auto', padding: '10px 0px' }}>
            <Typography gutterBottom style={{ fontSize: 20, color: '#646464' }}>
              Minimum salary per month (₹)
            </Typography>
            <Slider
              ValueLabelComponent={ValueLabelComponent}
              aria-label="custom thumb label"
              defaultValue={0}
            />
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'center' }}>
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

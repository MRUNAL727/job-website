import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Box, makeStyles, Typography } from '@material-ui/core';
import Paginationx from './Pagination.js';
import Job from './Job';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import Filters from './Filters.jsx';
import { useSelector, useDispatch } from 'react-redux';
// import { addJobs } from '../../context/filter/filterslice.js';

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
  const [jobsList, setJobsList] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.filter.jobsList);
  const filters = useSelector((state) => state.filter.filters);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/all-jobs`);
        setJobsList(res.data);
        // dispatch(addJobs(res.data))
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/all-jobs`);
        setJobsList(res.data);
        // dispatch(addJobs(res.data))
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (Object.keys(filters).length === 0) {
      getJobs();
    }
  }, [filters]);

  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  useEffect(() => {
    // if (filteredJobs.length == 0) {
      console.log(filteredJobs.length);
      setFilteredJobs(jobs);
      setJobsList([]);
    // }
  }, [jobs]);

  return (
    <>
      <Box style={{ display: 'flex', width: '60%', margin: '50px auto' }}>
        {/* <Box> */}
        <Filters />
        {/* </Box> */}
        <Box style={{ flex: 2, marginBottom: 10 }}>
          {( (filteredJobs && filteredJobs.length === 0) || (jobs && jobs.length === 0)) &&
          jobsList.length === 0 ? (
            <Typography
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              No jobs found
            </Typography>
          ) : filteredJobs && filteredJobs.length > 0 ? (
            filteredJobs
              .slice(pagination.start, pagination.end)
              .map((job) => <Job job={job} key={job._id} />)
          ) : (
            jobsList &&
            jobsList
              .slice(pagination.start, pagination.end)
              .map((job) => <Job job={job} key={job._id} />)
          )}

          { filteredJobs && filteredJobs.length != 0 && (
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
          )}
        </Box>
      </Box>
    </>
  );
};

export default AllJobs;

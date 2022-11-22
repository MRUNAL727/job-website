import {
  Box,
  Typography,
  makeStyles,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles({
  companyName: {
    fontSize: 22,
    color: 'grey',
  },

  jobType: {
    fontSize: 25,
    color: 'black',
    textDecoration: 'none',
  },

  details: {
    marginLeft: 20,
  },

  smallBox: {
    width: '30%',
  },
  category: {
    padding: '5px 15px 5px 15px',
    margin: '15px 10px 10px 10px ',
    background: '#F5F5F5',
    // color: 'white',
    opacity: 0.7,
    color: 'black',
    border: '1px solid #fff',
    borderRadius: 8,
  },
});

const Job = ({ job }) => {
  const classes = useStyles();
  return (
    <Box style={{ margin: '0px 0px 25px 20px' }}>
      {
        <Card
          style={{
            boxShadow: '0px 4px 10px rgba(0 76 255 / 13%)',
            padding: '5px 0px',
          }}
        >
          <Link
            to={`/job-details/${job._id}`}
            style={{ textDecoration: 'none' }}
          >
            <Box style={{ width: '100%' }}>
              <CardContent>
                <Box style={{ display: 'flex' }}>
                  <Box style={{}}>
                    <Box>
                      <Typography className={classes.jobType}>
                        {job.jobType}
                      </Typography>
                    </Box>

                    <Box style={{ padding: 10 }}>
                      <Typography className={classes.companyName}>
                        {job.companyName}
                      </Typography>
                    </Box>
                  </Box>
                  <Box style={{ marginLeft: 'auto' }}>
                    <img
                      src={`data:${job.image.contentType};base64, ${job.image.logo}`}
                      alt="logo"
                      height="70px"
                      width="70px"
                      style={{ borderRadius: '50%' }}
                    ></img>
                  </Box>
                </Box>

                {job.workFromHome && (
                  <Box style={{ display: 'flex' }}>
                    <Home style={{ fontSize: 17, color: '#D3D3D3' }} />
                    <Typography
                      style={{
                        padding: '0px 5px 1px 5px',
                        fontSize: 13,
                        color: 'black',
                        opacity: 0.8,
                      }}
                    >
                      Work from home
                    </Typography>
                  </Box>
                )}
                <Box style={{ display: 'flex', width: '80%', padding: 5 }}>
                  
                  <Box className={classes.smallBox}>
                    <Typography style={{ color: 'grey' }}>Salary</Typography>
                    <Typography style={{ paddingRight: 15, color: 'black' }}>
                      {job.stipend}
                    </Typography>
                  </Box>
                  <Box className={classes.smallBox}>
                    <Typography style={{ color: 'grey' }}>Apply by</Typography>
                    <Typography style={{ paddingRight: 15, color: 'black' }}>
                      {job.applyBy}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Link>
        </Card>
      }
    </Box>
  );
};

export default Job;

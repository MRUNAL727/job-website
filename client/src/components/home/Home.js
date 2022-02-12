import {Box, makeStyles} from '@material-ui/core'
import AllJobs from './AllJobs';

const useStyles = makeStyles({
   
})

const Home=()=>{

    const classes = useStyles()

    return(
            <Box style={{margin: '5%'}} >
              {/* <Search /> */}
               <AllJobs /> 
               {/* <Searchedjobs />               */}
            </Box> 
    )
}

export default Home;
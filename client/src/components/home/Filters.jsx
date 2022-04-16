import { Typography, InputLabel, Select, MenuItem, makeStyles, Box, FormControl, Checkbox, Button} from "@material-ui/core";
import { useState, useEffect } from 'react'
import axios from 'axios';
import AllJobs from "./AllJobs";
import Job from './Job'



const useStyle = makeStyles({
     category:{
         width:'80%',
     }
})
const Filters= ()=>{

  const [jobType, setjobType] = useState('')
  const [query, setQuery] = useState("");
  const [filters, setfilters] = useState({})
  const [type, setType] = useState('');

const classes = useStyle()
    const handleCategories=()=>{
         
    }

    const handleLocation = ()=>{
        

    }

    const handleChang= (event)=>{
      setQuery(event.target.value.toLowerCase())
       setType(event.target.value)
    }

    console.log(type)

    return(
        <>
          <Typography style={{textAlign:'center', padding:'15px 0px', color: 'blue', fontSize:20}}>Filters</Typography>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Job type</InputLabel>
              <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={jobType}
                 label="Web development"
                 onChange={handleChang}>

                  <MenuItem value={'web development'}>Web development</MenuItem>
                  <MenuItem value={'nodejs'}>Node js</MenuItem>
               </Select>
              </FormControl>
          </Box>
        {/* <Box style={{width:'75%', border:'1px solid black', height:100, margin:10}}> */}
    
        {/* </Box> */}
        <InputLabel >Location</InputLabel>
         <Select onChange={handleLocation} className={classes.category}>
          <MenuItem value='Pune'>Pune</MenuItem>
          <MenuItem value='Mumbai'>Mumbai</MenuItem>
          <MenuItem value='Delhi'>Delhi</MenuItem>
        </Select>

        <Box>
            <label>Work from home</label>
            <Checkbox color='primary' />
        </Box>
        <button>djfhkusd</button>
          <AllJobs type={type} /> 
        </>
    ); 
}

export default Filters;
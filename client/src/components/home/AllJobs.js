import {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import {Box, Typography, makeStyles, Card, CardContent, TextField, InputLabel, Select, Button,
  MenuItem,  FormControl, Checkbox, Slider} from '@material-ui/core'
import {Link} from 'react-router-dom';
import {Home} from '@material-ui/icons'
import Filters from './Filters'
import ReactPaginate from 'react-paginate';
import Paginationx from './Pagination.js';
import { useLocation } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import Job from './Job'


const useStyle = makeStyles({
  category:{
      width:'80%',
  }
})


const AllJobs=()=>{

    const classes = useStyle()
    const [jobsList, setJobsList] = useState([]);
    const [filters, setFilters] = useState({});
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [checkboxValue, setCheckboxValue] = useState(true);
    const [inputLabel, setInputLabel] = useState('');

    useEffect(() => {
      const getJobs = async()=>{

        try{
        const res = await axios.get( `http://localhost:8000/all-jobs`)
           setJobsList(res.data)
        }catch(error){
          console.log(error)
        }
       }
       getJobs()
    },[]) 

    console.log(jobsList)
  
     useEffect(() => {
       filters && 
      setFilteredJobs(
        jobsList.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
          item.workFromHome===false ?
            (item[key].toLowerCase()).toString().includes(value)
             : 
            item.location ==="false" &&
            (item[key].toLowerCase()).toString().includes(value) 

          )
        )
      );
     },[filters]) 
  // console.log(filters)

    const [showPerPage, setShowPerPage] = useState(5);
    const [pagination, setPagination] =  useState({
      start:0,
      end: showPerPage
    }) 
console.log(pagination.start, pagination.end)
    const onPaginationChange = (start, end)=>{
      setPagination({start:start, end:end})
      // console.log(event.target.value)
    }
  
      const handleChange= (event)=>{
      console.log(checkboxValue)
        if(event.target.name === "workFromHome"){
           if(event.target.value === true){
             setCheckboxValue(false)
           }else{
             setCheckboxValue(true)
           }
        }
        setFilters( 
          (event.target.name === 'workFromHome') ? {...filters, 'workFromHome': checkboxValue}  
             && filters.location ? delete filters.location : ''

          :{...filters, [event.target.name]: event.target.value})
      }

      const handleClear=()=>{
         setInputLabel('Job Type');
         setFilters({})
      }
      return(
        <>
        <Box style={{display:'flex', width:'60%', margin:'50px auto'}}>
        {/* <Box> */}
        <Box style={{border:'1px solid #D3D3D3', flex:1, borderRadius: 2, height:400, position:'sticky', top:40}}>
          <Typography style={{textAlign:'center', padding:'15px 0px', color: 'blue', fontSize:20}}>Filters</Typography>

          <Box style={{ padding:'10px 43px 15px 30px'}}>
            <FormControl fullWidth>
               <InputLabel>Job Type</InputLabel>
               <Select labelId="demo-simple-select-label" id="demo-simple-select" name="jobType" onChange={handleChange}>
               <MenuItem value={'web development'}>Web development</MenuItem>
               <MenuItem value={'nodejs'}>Node js</MenuItem>
               <MenuItem value={'backend development'}>Backend development</MenuItem>
               <MenuItem value={'full stack development'}>Full stack development</MenuItem>
               </Select>
            </FormControl>
          </Box>

          <Box style={{padding:'0px 25px 10px 25px', width:'100%'}}>
          {/* <FormControl fullWidth> */}
          <InputLabel>Location</InputLabel>
           <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={handleChange} className={classes.category} name="location">
            <MenuItem value='pune'>Pune</MenuItem>
            <MenuItem value='mumbai'>Mumbai</MenuItem>
            <MenuItem value='delhi'>Delhi</MenuItem>
          </Select>
          {/* </FormControl> */}
          </Box>
         
        <Box style={{padding:'0px 25px 10px 25px' }} >
          <label>Work from home</label>
          <Checkbox color='primary'  name="workFromHome" onChange={handleChange} value='uhduash'/>
        </Box>
        <Box style={{width:'40%', margin:'auto', bottom:'10px'}}>
        <Button style={{color:'blue',}} onClick={handleClear}>Clear filters</Button>
        </Box>
     </Box>
    {/* </Box> */}
        <Box style={{flex:2, marginBottom:10}}>
       
              {  
                (filteredJobs.length > 0) ? 
                   filteredJobs.slice(pagination.start, pagination.end).map((job)=> <Job job={job} key={job._id} />) :
                   (Object.keys(filters).length === 0) &&
                 jobsList && jobsList.slice(pagination.start, pagination.end).map((job)=> <Job job={job} key={job._id} /> )
              }


          <Box style={{left:'50%', width:'30%', margin: 'auto', display:'block'}} >
             <Paginationx style={{left: '50%'}}
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={jobsList.length}
                />
          </Box>
        </Box>
      </Box>

       </>
)
 
}


export default AllJobs;

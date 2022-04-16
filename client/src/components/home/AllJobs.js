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

    useEffect(() => {
      const getJobs = async()=>{

        try{
        const res = await axios.get( `/all-jobs`)
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
            (item[key].toLowerCase()).toString().includes(value)
          )
        )
      );
     },[filters]) 


    const [showPerPage, setShowPerPage] = useState(2);
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

          :{...filters, [event.target.name]: event.target.value})
      }

      const handleClear=()=>{
         setFilters({})
      }
      return(
        <>
        <Box style={{display:'flex', width:'80%', margin:'50px auto' }}>
        <Box style={{border:'1px solid #D3D3D3', width:'30%', borderRadius: 2, height:500, position:'sticky'}}>
          <Typography style={{textAlign:'center', padding:'15px 0px', color: 'blue', fontSize:20}}>Filters</Typography>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Job type</InputLabel>
               <Select labelId="demo-simple-select-label" id="demo-simple-select" name="jobType" onChange={handleChange}>
              

               <MenuItem value={'web development'}>Web development</MenuItem>
               <MenuItem value={'nodejs'}>Node js</MenuItem>
               <MenuItem value={'backend development'}>Backend development</MenuItem>
               <MenuItem value={'full stack development'}>Full stack development</MenuItem>


               </Select>
            </FormControl>
          </Box>
{/* <Box style={{width:'75%', border:'1px solid black', height:100, margin:10}}> */}

{/* </Box> */}
          <InputLabel >Location</InputLabel>
           <Select onChange={handleChange} className={classes.category} name="location">
            <MenuItem value='pune'>Pune</MenuItem>
            <MenuItem value='mumbai'>Mumbai</MenuItem>
            <MenuItem value='delhi'>Delhi</MenuItem>
          </Select>
         
          {/* <Box sx={{ width: 300 }}>
         <Slider
            getAriaLabel={() => 'Minimum stipend'}
            // value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
      />
    </Box> */}
        <Box>
          <label>Work from home</label>
          <Checkbox color='primary'  name="workFromHome" onChange={handleChange} value='uhduash'/>
        </Box>
        <Box>
        <Button style={{color:'blue'}} onClick={handleClear}>Clear filters</Button>
        </Box>
     </Box>
        <Box style={{width:'80%'}}>
       
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
import {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import {Box, Typography, makeStyles, Card, CardContent, TextField} from '@material-ui/core'
import {Link} from 'react-router-dom';
import {Home} from '@material-ui/icons'
import Filters from './Filters'
import ReactPaginate from 'react-paginate';
import Paginationx from './Pagination.js';
import { useLocation } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles({
    companyName:{
        fontSize: 22,
        color: 'grey'
    },
  
    jobType:{
     fontSize: 25,
     color: 'black',
     textDecoration: 'none'
    },
 
    details:{
        marginLeft: 20
    },

    smallBox:{
      width: '30%'
    },
    category:{
      
      padding: '5px 15px 5px 15px',
      margin: '15px 10px 10px 10px ',
      background: '#F5F5F5',
      // color: 'white',
      opacity: 0.7,
      color: 'black',
      border: '1px solid #fff',
      borderRadius: 8

    }
})


const AllJobs=()=>{
    const [jobsList, setJobsList] = useState({});
    const classes = useStyles()
    const  [search, setSearch] = useState('')
    const  [finalSearch, setFinalSearch] = useState('')

    const [showPerPage, setShowPerPage] = useState(4);
    // const searchRef = useRef()
    const arr=[];


    const [pagination, setPagination] =  useState({
      start:0,
      end: showPerPage
    }) 

    const onPaginationChange = (start, end)=>{
      setPagination({start:start, end:end});
    }

    useEffect(() => {
        axios.get(`/all-jobs`).then((alljobs)=>{
          if(search===''){
          setJobsList(alljobs.data);
          }
          else{
             console.log(alljobs)
            
              alljobs.data.map((job)=>(
                (job.jobType).toLowerCase()===
                  finalSearch ? 
                 arr.push(job) : console.log('no')
             ))              
             setJobsList(arr)
          }
        })
      },[finalSearch])

      const handleSubmit=()=>{
        const lowerCase = search.toLowerCase()
          setFinalSearch(lowerCase)
          console.log("lowe"+lowerCase)
      }

      const handleChange=(event)=>{
        
         setSearch(event.target.value)
      }

      
      return(
        <Box>
         <Box >
          <Box style={{display:'flex', margin:'auto', width:'50%', padding:'10px 10px 50px 10px'}}>
              <TextField placeholder='Ex web development' 
                      style={{display:'flex', width:'40%'}}
                      onChange={(handleChange)} >
                </TextField>
                <Typography onClick={handleSubmit}><SearchIcon /></Typography>
          </Box>
        <Box style={{width:'80%', margin:'auto', color: '#F5F5F5', display:'flex'}}>
        <Box style={{border:'1px solid #D3D3D3', width:'30%', borderRadius: 2, height:500}}>
            <Card>
              <Filters />
            </Card>
        </Box>
      

             <Box style={{marginLeft:20, width:'70%'}}>
             {  
                 jobsList.length ?
                  jobsList.map(jobs=>(
                  
                  <Card style={{border: '1px solid #D3D3D3', width:'70%', padding:'5px 0'}}>
                     
                    <Link to={`/job-details/${jobs._id}`} key={jobsList.indexOf(jobs)} style={{textDecoration:'none'}}>
                      <Box style={{ width: '100%'}}>
                         <CardContent>
                           <Box style={{display:'flex', flexDirection:'row'}}>
                             <Box style={{}}>
                              <Box >
                                 <Typography className={classes.jobType}>{jobs.jobType}</Typography> 
                              </Box>
                      
                            <Box style={{padding:10}}>
                              <Typography className={classes.companyName}>{jobs.companyName}</Typography>
                            </Box>
                            </Box>
                           <Box style={{ marginLeft:'auto'}}>
                              <Typography style={{border:'1px solid blue', padding:2, color:'inherit'}}>Image</Typography>
                           </Box>
                        </Box>

                      {
                        jobs.workFromHome && 
                        <Box style={{display: 'flex'}}>
                         <Home style={{fontSize:17, color: '#D3D3D3'}}/>
                         <Typography style={{padding:'0px 5px 1px 5px', fontSize:13, color:'black', opacity:0.8}}>Work from home</Typography>
                         </Box>
                      }
                      <Box style={{display:'flex', width:'80%', padding:5}}>
                          
                          <Box className={classes.smallBox}>
                              <Typography style={{color: 'grey', display:'flex'}}>Duration</Typography>
                              <Typography style={{paddingRight:15, color:'black'}}>{jobs.duration}</Typography>
                          </Box>
                          <Box className={classes.smallBox}>
                              <Typography style={{color: 'grey'}}>Stipend</Typography>
                              <Typography style={{paddingRight:15, color:'black'}}>{jobs.stipend}</Typography>
                          </Box>
                          <Box className={classes.smallBox}>
                              <Typography style={{color: 'grey'}}>Apply by</Typography>
                              <Typography style={{paddingRight:15, color:'black'}}>{jobs.applyBy}</Typography>
                          </Box>
                        </Box>
                          {/* <Box style={{display:'flex'}}> */}
                            {/* { */}
                              {/* jobs.categories.map(category =>(
                                <Typography className={classes.category}>{category}</Typography>
                              )) */}
                            {/* }  */}
                          {/* </Box> */}
                     
                      </CardContent>
                     </Box>
                    </Link>
                  </Card>
                ))
                : <Box></Box>
                } 
            
        </Box>
        </Box> 
        </Box> 
           <Box style={{left:'50%', width:'30%', margin: 'auto', display:'block'}} >
             <Paginationx style={{left: '50%'}}
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={jobsList.length}
              />
              </Box>
        </Box>

       
)
 
}


export default AllJobs;
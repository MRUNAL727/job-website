import {Box, Typography, makeStyles, Card, CardContent} from '@material-ui/core'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import {Home} from '@material-ui/icons'


const useStyles = makeStyles({
    companyName:{
        fontSize: 28,
        // color: 'grey',
        color:'#4169E1'
    },
 
    jobType:{
     fontSize: 25,
     color:'#4169E1'

    },
 
    details:{
        marginLeft: 20,
        opacity: 0.8,
        fontSize:15
    }
 })
const JobDetails=()=>{
    const classes = useStyles()

    const [job, setJob] = useState([]);
    const {_id} = useParams();

    useEffect(() => {
        axios.get(`/api/job-details/${_id}`).then((job)=>{
          setJob(job.data);
        })
      },[])
       


   return(
           <Box style={{margin:'auto', width:'50%', marginTop:80}}> 
                  <Typography style={{textAlign:'center', fontSize:40}}>{job.companyName}</Typography>

            <Card style={{border: '1px solid #D3D3D3', padding:'5px 5px 0 15px', boxShadow:'5px 5px 5px #D3D3D3'}}>
                     
                       <Box style={{ width: '100%'}}>
                       <CardContent >
 
                        <Box >
                          <Typography className={classes.jobType} style={{color:'#4169E1'}}>{job.jobType}</Typography> 
                        </Box>
 
                       <Box style={{padding:10}}>
                          <Typography className={classes.companyName}>{job.companyName}</Typography>
                       </Box>
                       {
                         job.workFromHome && 
                         <Box style={{display: 'flex'}}>
                          <Home style={{fontSize:17, color: '#D3D3D3', textAlign:'center'}}/>
                          <Typography style={{padding:'0px 5px 1px 5px', fontSize:13, color:'black', opacity:0.8, textAlign:'center'}}>
                                   Work from home</Typography>
                          </Box>
                       }
                       <Box style={{display:'flex', width:'80%', padding:5}}>
                           
                           <Box className={classes.smallBox}>
                               <Typography style={{color: 'grey'}}>Salary</Typography>
                               <Typography style={{paddingRight:15, color:'black'}}>{job.stipend}</Typography>
                           </Box>
                           <Box className={classes.smallBox}>
                               <Typography style={{color: 'grey'}}>Apply by</Typography>
                               <Typography style={{paddingRight:15, color:'black'}}>{job.applyBy}</Typography>
                           </Box>
                         </Box>
                           <Box style={{display:'flex'}}>
                             {/* {
                               job.categories.map(category =>(
                                 <Typography className={classes.category}>{category}</Typography>
                               ))
                             }  */}
                           </Box>
                      
                     </CardContent>
                          
                    </Box>
                   {/* </Link> */}
                   </Card>
                    <Box style={{margin:'auto', border:'0.5px solid #dcdcdc', padding:20, marginTop:30, boxShadow:'2px 2px 2px #D3D3D3', marginBottom:40}}>
                    
                        <Box>
                         <Typography style={{fontWeight: 'bold', color:'#4169E1'}}>About {job.companyName}-</Typography>
                          <Typography className={classes.details} style={{opacity: 0.8}}>{job.aboutCompany}</Typography>
                        </Box>

                        <Box style={{marginTop:15}}>
                          <Typography style={{fontWeight: 'bold', color:'#4169E1'}}>Job discription</Typography>
                          <Typography className={classes.details} style={{opacity: 0.8}}>{job.jobDiscription}</Typography>
                       </Box>
                    
                       <Box style={{marginTop:15}}>
                           <Typography style={{fontWeight: 'bold', color:'#4169E1'}}>Skill(s) required</Typography>
                           <Typography style={{opacity: 0.8}} >{job.skillsRequired}</Typography>
                       </Box>

                       <Box style={{marginTop:15}}>
                           <Typography style={{fontWeight: 'bold', color:'#4169E1'}}>Who can apply</Typography>
                           <Typography className={classes.details}>{job.whoCanApply}</Typography>
                       </Box>

                       <Box style={{marginTop:15}}>
                           <Typography style={{fontWeight: 'bold', color:'#4169E1'}}>Perks</Typography>
                           <Typography className={classes.details}>{job.perks}</Typography>
                       </Box>

                       <Box style={{marginTop:15}}>
                          <Typography style={{fontWeight: 'bold', color:'#4169E1'}}>Number of openings</Typography>
                          <Typography className={classes.details} >{job.noOfOpenings}</Typography>
                       </Box> 
                </Box>
                </Box>
   )
}

export default JobDetails;
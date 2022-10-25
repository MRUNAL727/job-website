import {Box, Typography, TextField, makeStyles, Select, MenuItem, Checkbox, Button, FormControlLabel, InputLabel} from '@material-ui/core';
import clsx from 'clsx'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router';
import { useContext } from 'react'
import { ContextProvider } from '../../context/company/companyContext';
import { companyContext } from '../../context/company/companyContext.js'
import { AddPhotoAlternate } from '@material-ui/icons';

const useStyles = makeStyles({

   multiline:{ 
     width: '80%',
     margin: 'auto',
     border: '0.1px solid grey',
     marginBottom: 20

   },

   textField:{
       width: '100%',
   },

   button:{
       background: 'blue',
       color: '#fff',
       width: 150,
       height: 50,
   }
})
 
const PostJob=()=>{

   const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
    const classes = useStyles()
    const navigate = useNavigate();
    const formData = new FormData()
    // let category= [ ];
    const [category, setCategory] = useState([]);

    const company = useContext(companyContext)
      
    const [jobType, setJobType] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [aboutCompany, setaboutCompany] = useState('')
    const [jobDiscription, setjobDiscription] = useState('')
    const [skillsRequired, setskillsRequired] = useState('')
    const [whoCanApply, setwhoCanApply] = useState('')
    const [perks, setperks] = useState('')
    const [noOfOpenings, setnoOfOpenings] = useState('')
    const [startDate, setstartDate] = useState('')
    const [duration, setduration] = useState('')
    const [stipend, setstipend] = useState('')
    const [applyBy, setapplyBy] = useState('')
    const [email, setemail] = useState('')
    const [logo, setLogo] = useState()
    const [workFromHome, setworkFromHome] = useState(false)
    const [location, setLocation] = useState('');


    
    // const [job, setJob] =  useState({
    //     jobType: '',
    //     companyName:'',
    //     aboutCompany:'',
    //     jobDiscription:'',
    //     skillsRequired:'',
    //     whoCanApply: '',
    //     perks:'',
    //     noOfOpenings:'',
    //     startDate:'',
    //     duration:'',
    //     stipend:'',
    //     applyBy:'',
    //     email:'',
    //     // workFromHome: false,
    //     // location:'',
    //     // categories:[]
    // })
   

    // const handleChange=(event)=>{
    //   // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      
    //   setJob({...job, [event.target.name] : event.target.value});
    //    console.log(job)
    // }

    

    const cancel=()=>{
       setJobType('')
    //   setJob({
    //     jobType: '', 
    //     companyName:'',
    //     aboutCompany:'',
    //     jobDiscription:'',
    //     skillsRequired:'',
    //     whoCanApply: '',
    //     perks:'',
    //     noOfOpenings:'',
    //     startDate:'',
    //     duration:'',
    //     stipend:'',
    //     applyBy:'',
    //     email:'',
    //     // location:'',
    //     // categories:[]
    //   })
      navigate('/')
    }

    const handleCategories = (event)=>{
         setCategory(category=>[...category, event.target.value])
    }
   
    const appendData=()=>{
      if(workFromHome === true){
         setLocation('false');
      }else{
         formData.append('location', location)
         setworkFromHome(false)
      }
       formData.append('jobType', jobType)
       formData.append('companyName', companyName)
       formData.append('aboutCompany', aboutCompany)
       formData.append('jobDiscription', jobDiscription)
       formData.append('skillsRequired', skillsRequired)
       formData.append('whoCanApply', whoCanApply)
       formData.append('perks', perks)
       formData.append('noOfOpenings', noOfOpenings)
       formData.append('startDate', startDate)
       formData.append('duration', duration)
       formData.append('stipend', stipend)
       formData.append('applyBy', applyBy)
       formData.append('email', email)
       formData.append('logo', logo)
       formData.append('workFromHome', workFromHome)

    }

    const submit= async()=>{

      
         appendData()
        await axios.post('http://localhost:8000/post-job', formData)
        // .then(navigate('/'))
         

    }

    // const handleLocation= (event)=>{
    //    setLocation(event.target.value)
    //   setJob({...job, location: location});
    // }

    const handlejobType= (event)=>{setJobType(event.target.value)}
    const handlecompanyName= (event)=>{setcompanyName(event.target.value)}
    const handleaboutCompany= (event)=>{setaboutCompany(event.target.value)}
    const handlejobDiscription= (event)=>{setjobDiscription(event.target.value)}
    const handleskillsRequired= (event)=>{setskillsRequired(event.target.value)}
    const handlewhoCanApply= (event)=>{setwhoCanApply(event.target.value)}
    const handleperks= (event)=>{setperks(event.target.value)}
    const handlenoOfOpeninngs= (event)=>{setnoOfOpenings(event.target.value)}
    const handlestatrDate= (event)=>{setstartDate(event.target.value)}
    const handleduration= (event)=>{setduration(event.target.value)}
    const handlestipend= (event)=>{setstipend(event.target.value)}
    const handleapplyBy= (event)=>{setapplyBy(event.target.value)}
    const handleemail= (event)=>{setemail(event.target.value)}
    const handleLogo= (event)=>{setLogo(event.target.files[0])}
    const handleworkFromHome= (event)=>{
       workFromHome===false ? setworkFromHome(true)
       : setworkFromHome(false)
      }
    const handleLocation = (event) => {setLocation(event.target.value)}
    


   return(
      <Box style={{border: '1px solid grey', width:'70%', margin:'auto', marginTop: 20, boxShadow:'10px 5px 5px #89CFF0'}}>
        <Typography style={{textAlign: 'center', fontSize: 40, padding:20}}>Create job</Typography>
       
        <Box style={{display: 'block'}}>
            <Box style={{padding: '10px 0 20px 100px'}}>
              <TextField id="outlined-basic" label="Job type" variant="outlined"  
                style={{width: '45%'}} onChange={handlejobType} name="jobType"/>

              <TextField id="outlined-basic" label="Company name" variant="outlined" 
                style={{width: '45%'}} onChange={handlecompanyName} name="companyName"/>
            </Box>
            
            <Box style={{width:'80%', margin:'auto', paddingBottom:15}}>
              <TextField style={{width: '25%'}} id="outlined-basic" label="Start date" required
                 name="startDate" variant="outlined" onChange={handlestatrDate}/>
              <TextField style={{width: '25%'}} id="outlined-basic" label="Duration"  required
                name="duration" variant="outlined" onChange={handleduration} />
              <TextField style={{width: '25%'}} id="outlined-basic" label="Salary" required
                name="stipend" variant="outlined" onChange={handlestipend}/>
              <TextField style={{width: '25%'}} id="outlined-basic" label="Apply by" required
                name="applyBy" variant="outlined" onChange={handleapplyBy}/>
            </Box>

            <Box style={{width:'80%',  margin:'auto'}}>
            <TextField style={{width: '80%', paddingBottom:15}} id="outlined-basic" label="Email" required
                name="email" variant="outlined" onChange={handleemail}/>
              
            </Box>

             <Box className={clsx(classes.multiline)} >
               <TextField id="standard-multiline-static" label="About company" multiline rows={8}
               variant="standard" className={classes.textField} onChange={handleaboutCompany} name="aboutCompany"/>
             </Box>
 
             <Box  className={clsx(classes.multiline)} >
               <TextField id="standard-multiline-static" label="Job Discription" multiline rows={8} 
               variant="standard" className={classes.textField} onChange={handlejobDiscription} name="jobDiscription"/>
            </Box>
           
            <Box className={clsx(classes.multiline)}>
               <TextField id="standard-multiline-static" label="Skill(s) required" multiline rows={2} 
               variant="standard" className={classes.textField} onChange={handleskillsRequired} name="skillsRequired"/>
            </Box>
            
            <Box className={clsx(classes.multiline)}>
              <TextField id="standard-multiline-static" label="Who can apply" multiline rows={4}
               variant="standard" className={classes.textField} onChange={handlewhoCanApply} name="whoCanApply"/>
            </Box>
           
            <Box className={clsx(classes.multiline)}>
            <TextField id="standard-multiline-static" label="Perks" multiline rows={2} 
            variant="standard" className={classes.textField} onChange={handleperks} name="perks"/>
            </Box>

          <Box style={{display:'flex', margin:'auto', width:'80%'}}>
            <Box style={{width:'30%'}}>
            <TextField id="outlined-basic" label="Number of openings" variant="outlined" 
                onChange={handlenoOfOpeninngs} name="noOfOpenings"/>
             </Box>
               <Box >
                  <label style={{display:'flex', border:'1px solid grey'}}>
                  <input type={'file'} onChange={handleLogo} style={{display:'none'}}/>
                  <AddPhotoAlternate style={{justifyContent:'center'}}/>
                  <p>Upload logo</p>
                  </label>
                </Box>
             <Box>
             {/* <FormControlLabel control={<Checkbox style={{color:'blue'}} />} label="Work from home" 
                name='workFromHome' onChange={handleChange} /> */}
                <label>Work from home</label>
                <Checkbox onChange={handleworkFromHome}/>
             </Box> 
            </Box>
            <Box>
               <TextField id="outlined-basic" label="Location" variant="outlined" 
                 onChange={handleLocation} name="location"/>
             </Box>
        </Box> 
           <Box style={{margin: 'auto', width: '40%', display: 'flex'}}>
              <Box style={{padding:20}}>
               <Button className={classes.button} onClick={submit}>Create</Button>
               </Box>
               <Box style={{padding:20}}>
               <Button className={classes.button} onClick={cancel}>Cancel</Button>
               </Box>
           </Box>

      </Box>
   )
}



export default PostJob;
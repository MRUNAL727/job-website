import {Box, Typography, TextField, makeStyles, Select, MenuItem, Checkbox, Button, FormControlLabel, InputLabel} from '@material-ui/core';
import clsx from 'clsx'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router';



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
    // let category= [ ];
    const [category, setCategory] = useState([]);
    const [location, setLocation] = useState('');

    const [job, setJob] =  useState({
        jobType: '',
        companyName:'',
        aboutCompany:'',
        jobDiscription:'',
        skillsRequired:'',
        whoCanApply: '',
        perks:'',
        noOfOpenings:'',
        startDate:'',
        duration:'',
        stipend:'',
        applyBy:'',
        email:'',
        // workFromHome: false,
        // location:'',
        // categories:[]
    })
   

    const handleChange=(event)=>{
      // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      
      setJob({...job, [event.target.name] : event.target.value});
       console.log(job)
    }

    

    const cancel=()=>{
      
      setJob({
        jobType: '', 
        companyName:'',
        aboutCompany:'',
        jobDiscription:'',
        skillsRequired:'',
        whoCanApply: '',
        perks:'',
        noOfOpenings:'',
        startDate:'',
        duration:'',
        stipend:'',
        applyBy:'',
        email:'',
        // location:'',
        // categories:[]
      })
      navigate('/')
    }

    const handleCategories = (event)=>{
      
         setCategory(category=>[...category, event.target.value])
    
    }

   
    const submit= async()=>{
      //  await submitCategories()
      // console.log(job)
        await axios.post('/post-job', job).then(navigate('/'))
         

    }

    const handleLocation= (event)=>{
       setLocation(event.target.value)
      setJob({...job, location: location});
    }
   
   return(
      <Box style={{border: '1px solid grey', width:'70%', margin:'auto', marginTop: 20, boxShadow:'10px 5px 5px #89CFF0'}}>
        <Typography style={{textAlign: 'center', fontSize: 40, padding:20}}>Create job</Typography>
       
        {/* <InputLabel>categories</InputLabel>
         <Select onChange={handleCategories} name="categories">
          <MenuItem value='Nodejs'>Nodejs</MenuItem>
          <MenuItem value='React'>React</MenuItem>
          <MenuItem value='React native'>React native</MenuItem>
          <MenuItem value='Bootstrap'>Bootstrap</MenuItem>
        </Select> */}
     
        <Box style={{display: 'block'}}>
            
            <Box style={{padding: '10px 0 20px 100px'}}>
              <TextField id="outlined-basic" label="Job type" variant="outlined"  
                style={{width: '45%'}} onChange={handleChange} name="jobType"/>

              <TextField id="outlined-basic" label="Company name" variant="outlined" 
                style={{width: '45%'}} onChange={handleChange} name="companyName"/>
            </Box>
            
            <Box style={{width:'80%', margin:'auto', paddingBottom:15}}>
              <TextField style={{width: '25%'}} id="outlined-basic" label="Start date" required
                 name="startDate" variant="outlined" onChange={handleChange}/>
              <TextField style={{width: '25%'}} id="outlined-basic" label="Duration"  required
                name="duration" variant="outlined" onChange={handleChange} />
              <TextField style={{width: '25%'}} id="outlined-basic" label="Salary" required
                name="stipend" variant="outlined" onChange={handleChange}/>
              <TextField style={{width: '25%'}} id="outlined-basic" label="Apply by" required
                name="applyBy" variant="outlined" onChange={handleChange}/>
            </Box>

            <Box style={{width:'80%',  margin:'auto'}}>
            <TextField style={{width: '80%', paddingBottom:15}} id="outlined-basic" label="Email" required
                name="email" variant="outlined" onChange={handleChange}/>
              
            </Box>

             <Box className={clsx(classes.multiline)} >
               <TextField id="standard-multiline-static" label="About company" multiline rows={8}
               variant="standard" className={classes.textField} onChange={handleChange} name="aboutCompany"/>
             </Box>
 
             <Box  className={clsx(classes.multiline)} >
               <TextField id="standard-multiline-static" label="Job Discription" multiline rows={8} 
               variant="standard" className={classes.textField} onChange={handleChange} name="jobDiscription"/>
            </Box>
           
            <Box className={clsx(classes.multiline)}>
               <TextField id="standard-multiline-static" label="Skill(s) required" multiline rows={2} 
               variant="standard" className={classes.textField} onChange={handleChange} name="skillsRequired"/>
            </Box>
            
            <Box className={clsx(classes.multiline)}>
              <TextField id="standard-multiline-static" label="Who can apply" multiline rows={4}
               variant="standard" className={classes.textField} onChange={handleChange} name="whoCanApply"/>
            </Box>
           
            <Box className={clsx(classes.multiline)}>
            <TextField id="standard-multiline-static" label="Perks" multiline rows={2} 
            variant="standard" className={classes.textField} onChange={handleChange} name="perks"/>
            </Box>

          <Box style={{display:'flex', margin:'auto', width:'80%'}}>
            <Box style={{width:'30%'}}>
            <TextField id="outlined-basic" label="Number of openings" variant="outlined" 
                onChange={handleChange} name="noOfOpenings"/>
             </Box>  

             <Box>
             {/* <FormControlLabel control={<Checkbox style={{color:'blue'}} />} label="Work from home"  */}
                {/* name='workFromHome' onChange={handleChange} /> */}
             </Box> 
             {/* <Box>
             <InputLabel>Location</InputLabel>
                <Select onChange={handleLocation} className={classes.category}>
                <MenuItem value='Pune'>Pune</MenuItem>
                <MenuItem value='Mumbai'>Mumbai</MenuItem>
                <MenuItem value='Delhi'>Delhi</MenuItem>
             </Select>
             </Box> */}
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
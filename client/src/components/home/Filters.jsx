import { Typography, InputLabel, Select, MenuItem, makeStyles, Box} from "@material-ui/core";


const useStyle = makeStyles({
     category:{
         width:'80%',
     }
})
const Filters= ()=>{
const classes = useStyle()
    const handleCategories=()=>{

    }

    const handleLocation = ()=>{
        
    }

    return(
        <>
        
          <Typography style={{textAlign:'center', padding:'15px 0px', color: 'blue', fontSize:20}}>Filters</Typography>

         {/*<InputLabel >Category</InputLabel>
         <Select onChange={handleCategories} className={classes.category}>
          <MenuItem value='Nodejs'>Nodejs</MenuItem>
          <MenuItem value='React'>React</MenuItem>
          <MenuItem value='React native'>React native</MenuItem>
          <MenuItem value='Bootstrap'>Bootstrap</MenuItem>
        </Select>
        <Box style={{width:'75%', border:'1px solid black', height:100, margin:10}}>
    
        </Box>
        <InputLabel >Location</InputLabel>
         <Select onChange={handleLocation} className={classes.category}>
          <MenuItem value='Pune'>Pune</MenuItem>
          <MenuItem value='Mumbai'>Mumbai</MenuItem>
          <MenuItem value='Delhi'>Delhi</MenuItem>
        </Select>
        */}
        </>
    ); 
}

export default Filters;
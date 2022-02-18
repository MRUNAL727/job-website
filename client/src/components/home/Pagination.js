import {Box, Typography, Button} from '@material-ui/core'
import React, { useState, useEffect } from "react";
import Pagination from '@material-ui/lab/Pagination';
// import Stack from '@material-ui/lab/Stack'



const Paginationx = ({ showPerPage, onPaginationChange, total }) => {
        const [counter, setCounter] = useState(1);
    
    
    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
      }, [counter]);
    
      const handleChange = (e, p) => {
        setCounter(p);
        window.scrollTo(0, 0)
      };

  
   return(
     <>
       <Box style={{marginTop: 100, color: 'black', display:"block"}}>
          
              <Pagination color='primary'  variant="outlined" count={Math.ceil(total / showPerPage)} onChange={handleChange}/>
          

       </Box>
       </>
   )
}


export default Paginationx;
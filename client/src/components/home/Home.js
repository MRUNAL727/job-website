import AllJobs from './AllJobs';
import Filters from './Filters';
import {Box, Typography, makeStyles, Card, CardContent, TextField} from '@material-ui/core'
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Advertise from '../advertise/Advertise';


const useStyles = makeStyles({
   
})

const Home=()=>{

    const classes = useStyles()
    

    return(
            // // <Box style={{margin: '5%'}} >
            //    {/* <Box style={{width:'80%', margin:'auto', color: '#F5F5F5', display:'flex'}}> */}
            //       {/* <Box style={{border:'1px solid #D3D3D3', width:'30%', borderRadius: 2, height:500}}> */}
            //         {/* <Card> */}
            //          {/* <Filters /> */}
            //         {/* </Card> */}
            //       {/* </Box> */} 
                   <Box style={{width:'100%'}}>
                     {/* <AllJobs />  */}
                     <Header />
                     <Advertise />
                     <Footer />
                   </Box>
              //  {/* </Box>  */}
            // </Box> 
    )
}

export default Home;
import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <div>
      <div className='headerContainer'>
         <SearchIcon style={{fontSize:30}}/>
         <h2 className='headerHeading'>WE HELP PEOPLE TO GET JOBS.</h2>
      </div>
    </div>
  )
}

export default Header
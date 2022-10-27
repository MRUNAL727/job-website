import { Route,  Routes, BrowserRouter} from 'react-router-dom';
import NavBar from './components/navBar/NavBar.js'
import Home from './components/home/Home.js';
import Profile from './components/profile/Profile.js';
import Register from './components/register/Register.js';
import UserRegistration from './components/register/UserRegistration.js'
import PostJob from './components/job/PostJob.jsx'
import JobDetails from './components/job/JobDetails.jsx'
import CompanyRegistration from './components/register/CompanyRegistration.js'
import Login from './components/login/Login'
import { companyContext } from './context/company/companyContext.js'
import { useContext, useEffect } from 'react'
import { ContextProvider } from './context/company/companyContext';
import { Navigate } from "react-router-dom";



function App() {

  const company = useContext(companyContext)

  useEffect(()=>{
      
  },[company.company])
  // console.log(company.company)
  return (
      <BrowserRouter>
      <ContextProvider>
       <NavBar />
        <Routes>
         <Route exact path='/' element={<Home />}/>
         <Route path='/profile' element={<Profile />} />
         <Route path='/register' element={<Register />} />
         <Route path='/login/user' element={<UserRegistration />} />
         <Route path='/post-job' element={(company.company===null) ? <Login /> : <PostJob/>} />
         {/* <Route path='/post-job' element={<PostJob />} /> */}
         <Route path='/job-details/:_id' element={<JobDetails />} />
         <Route path='/register/company' element={<CompanyRegistration />} />
         <Route path='/login' element={<Login />} />
        </Routes>
        </ContextProvider>
       </BrowserRouter>
  );
}

export default App;

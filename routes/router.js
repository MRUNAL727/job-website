import express from 'express';
import userRegistration from '../controllers/userControllers/userRegistration.js'
import postJob from '../controllers/jobController/postJob.controller.js'
import getAllJobs from '../controllers/jobController/getAllJobs.js'
import getJobDetails from '../controllers/jobController/getJobDetails.js'
import {companyRegistration} from '../controllers/userControllers/companyRegistration.js'
import {postLogin} from '../controllers/loginController.js'

const router = express.Router();


// router.post('/register/user', userRegistration);
router.post('/post-job', postJob);
router.get('/all-jobs', getAllJobs);
router.get('/job-details/:_id', getJobDetails)
router.post('/register/company', companyRegistration);
router.post('/login', postLogin);
// router.get('/jobs/q=')


export default router;

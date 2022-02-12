import jobModel from '../../models/jobModel.js'

const postJob=async(req, res)=>{
    const job= req.body;
     const jobData = new jobModel(job);
    try{
        const newJob = await jobData.save();
        console.log(newJob);
    }
    catch(err){
        console.log(err);
    }
}

export default postJob;
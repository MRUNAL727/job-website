import jobsData from '../../models/jobModel.js'

 const getAllJobs = async(req, res)=>{
    try {
        const allJobs = await jobsData.find();
        res.status(200).json(allJobs);

    } catch (error) {
        // console.log("Error" + error)
       res.status(404).json({message:error.message})
    }
}


export default getAllJobs;
import jobModel from '../../models/jobModel.js'

const getJobByEmail= async(req,res) => {
    try{
        const job = await jobModel.findOne({'_id': req.params._id});
        res.json(job);
     }
     catch(error){
         console.log(error)
     }
 
}

export default getJobByEmail;
import jobModel from '../../models/jobModel.js'

const postJob= async(req, res, next)=>{
  console.log(req.files)
     
    const job= req.body;
    try{
     const jobData = new jobModel({
        jobType: req.body.jobType,
        companyName:req.body.companyName,
        aboutCompany:req.body.aboutCompany,
        jobDiscription:req.body.aboutCompany,
        skillsRequired:req.body.skillsRequired,
        whoCanApply: req.body.whoCanApply,
        perks:req.body.perks,
        noOfOpenings:req.body.noOfOpenings,
        startDate:req.body.startDate,
        
        stipend:req.body.stipend,
        applyBy:req.body.applyBy,
        email:req.body.email,
        workFromHome:req.body.workFromHome
     })

     jobData.logo.data = req.files.logo.data;
     jobData.logo.contentType = req.files.logo.mimetype;
     jobData.save(function(err) {
        if (err) { return next(err); }
        res.status(200).json({message:'Job posted successfully'});
    });
     
  }
    catch(err){
        console.log(err);
        res.send(err)
    }
}

export default postJob; 
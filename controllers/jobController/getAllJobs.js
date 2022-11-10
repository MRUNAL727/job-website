import jobsData from '../../models/jobModel.js'

 const getAllJobs = async(req, res)=>{
    const arr=[]
    // console.log(req.query.type)

    // const type = req.query.type;
    let jobs=[];

    const sendJobs = (jobs) =>{
      jobs.map((m)=>{
         const imgStr = m.logo.data.toString('base64')
        const data = {
            jobType: m.jobType,
            partTime:m.partTime,
            companyName:m.companyName,
            aboutCompany:m.aboutCompany,
            location:m.location,
            jobDiscription:m.aboutCompany,
            skillsRequired:m.skillsRequired,
            whoCanApply: m.whoCanApply,
            perks:m.perks,
            experience:m.experience,
            noOfOpenings:m.noOfOpenings,
            startDate:m.startDate,
            duration:m.duration,
            stipend:m.stipend,
            applyBy:m.applyBy,
            email:m.email,
            workFromHome:m.workFromHome,
           _id:m._id,
            image:{
            // logo: m.logo.data.toString('base64'),
            logo:imgStr,
            contentType:m.logo.contentType
          }
        }

        arr.push(data)
      })
    }
    try {
    //   if(type){ 
    //     console.log('type '+type)
    //     jobs =  await jobsData.find({
    //         jobType:{
    //         $in: [type],
    //       },
          
    //     });
    //     await sendJobs(jobs) 
    //   }
    //   else{
        jobs = await jobsData.find();
         await sendJobs(jobs)
      res.status(200).send(arr)
    } catch (error) {
       res.status(404).json({message:error.message})
    }
}


export default getAllJobs;
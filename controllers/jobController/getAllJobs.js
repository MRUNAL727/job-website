import jobsData from '../../models/jobModel.js';

const getAllJobs = async (req, res) => {
  console.log(req.query);
    let q = {$and:[{jobType: 'Web development'}, {partTime:true}]}
  try {
    const jobs = await jobsData.find(req.query);

    return res.status(200).send(jobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default getAllJobs;

// const sendJobs = (jobs) =>{
//   jobs.map((m)=>{
//      const imgStr = m.logo.data.toString('base64')
//     const data = {
//         jobType: m.jobType,
//         partTime:m.partTime,
//         companyName:m.companyName,
//         aboutCompany:m.aboutCompany,
//         location:m.location,
//         jobDiscription:m.aboutCompany,
//         skillsRequired:m.skillsRequired,
//         whoCanApply: m.whoCanApply,
//         perks:m.perks,
//         experience:m.experience,
//         noOfOpenings:m.noOfOpenings,
//         startDate:m.startDate,
//         duration:m.duration,
//         stipend:m.stipend,
//         applyBy:m.applyBy,
//         email:m.email,
//         workFromHome:m.workFromHome,
//        _id:m._id,
//         image:{
//         // logo: m.logo.data.toString('base64'),
//         logo:imgStr,
//         contentType:m.logo.contentType
//       }
//     }

//     arr.push(data)
//   })
// }

import userModel from '../../models/userModel.js'


const userRegistration = async(req, res)=>{
    const user= req.body;
    const userData = new userModel(user);
   try{
       const newUser = await userData.save();
       console.log(newUser);
   }
   catch(err){
       console.log(err);
   }
}

export default userRegistration;
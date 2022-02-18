import companyModel from "../../models/companyModel.js";
import bcrypt from 'bcrypt'

export const companyRegistration= async(req, res)=>{
     console.log(req.body)
     const company = req.body;

    
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(company.password, salt);
        
        const companyData = new companyModel({
            name:req.body.name, 
            email:req.body.email,
            phone:req.body.phone, 
            password:hashPassword
        });
    
        try {
            const newUser = await companyData.save();
            res.json({msg: "Registration Successful"});
        } catch (error) {
            res.status(500).json({msg:error})
            console.log(error);
        }
    
    
}


import companyModel from "../models/companyModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getLogin=()=>{
  // ensureLoggedOut({ redirectTo: '/' }),
  async (req, res, next) => {
    // res.render('login');
    res.send('Logged in')

  }
}

export const postLogin=async(req,res)=>{
      const email = req.body.email;
    try{
      const company = await companyModel.findOne({email})
      if(!company) return res.json({msg:'Email not found.', color:'red', accessToken:''})
      const match = await bcrypt.compare(req.body.password, company.password)

      if(!match) return res.json({msg:'Wrong email or password', color:'red', accessToken:''})

      const accessToken = jwt.sign({email:company.email}, process.env.ACCESS_TOKEN,{
        expiresIn: '1min'
      })  
      
      const refreshToken = jwt.sign({email:company.email}, process.env.REFRESH_TOKEN, {
        expiresIn: '10d'
      })
      
      await companyModel.updateOne({_id: company._id}, {$set:{refreshToken: refreshToken}});
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken:accessToken, msg:'Log in successfull', color:'green' });
      
    }catch(error){
        console.log(error)
    }

}


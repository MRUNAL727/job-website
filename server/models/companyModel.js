import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const companySchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        // unique: true    
    },
    email:{
        type: String,
        require: true,
        unique: true    
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require:true
    },
    refreshToken:{
        type:String
    }
})

// companySchema.pre('save', async function (next) {
//     try {
//       if (this.isNew) {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(this.password, salt);
//         this.password = hashedPassword;
//       }
//       next();  
//     }catch (error) {
//         console.log(error);
//      next(error);
//   }
// })


const companyModel = mongoose.model('company', companySchema);
export default companyModel;
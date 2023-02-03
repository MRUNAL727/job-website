import companyModel from '../../models/companyModel.js';
import bcrypt from 'bcryptjs';

export const companyRegistration = async (req, res) => {
  try {
    const { email } = req.body;
    const existingCompany = await companyModel.findOne({ email: email });
    if (!existingCompany) {
      let salt = bcrypt.genSaltSync(10);
      let hashedPassword = bcrypt.hashSync(req.body.password, salt);
      const companyData = new companyModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword,
      });

      const newUser = await companyData.save();
      res.status(200).json({ msg: 'Registration Successful' });
    } else {
      res.status(400).json({ msg: 'Company already exists' });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

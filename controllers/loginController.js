import companyModel from '../models/companyModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const company = await companyModel.findOne({ email: email });
    if (!company) {
      return res.status(400).json({ msg: 'Company not found please register' });
    } else {
      const check = await bcrypt.compare(password, company.password);
      if (!check) {
        return res.status(400).json({ msg: 'Incorrect email or password' });
      } else {
        const token = jwt.sign(
          { id: company._id },
          process.env.JWT_SECRETE_KEY,
          {
            expiresIn: '30s',
          }
        );
        res.cookie(String(company._id), token, {
          path: '/',
          expires: new Date(Date.now() + 1000 * 30), // 30 seconds
          httpOnly: true,
          sameSite: 'lax',
        });

        return res
          .status(200)
          .json({
            msg: 'Logged in successfully',
            data: {
              _id: company._id,
              name: company.name,
              email: company.email,
              phone: company.phone,
            },
          });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: 'Something went wrong' });
  }
};

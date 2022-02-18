import passport from "passport";
import LocalStrategy from 'passport-local'
import User from '../models/userModel'

app.use(new LocalStrategy.Strategy(
    {
        emailField: 'email',
        passwordField: 'password',
    },
    async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          // Username/email does NOT exist
          if (!user) {
            return done(null, false, {
            //   message: 'Username/email not registered',
            // console.log('not registered')
            });
          }
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'fail' });
            }
          });
        } catch (error) {
          console.log(error)
          done(error);
        }
      }
))
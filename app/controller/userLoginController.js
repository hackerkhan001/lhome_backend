const Login = require('../model/userLoginmodel'); // Adjust the path as needed
const User = require('../model/Registrationmodel'); // Import your User model
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
const { generateSessionToken } = require('../utilsFunction/sessionProvider');

async function sendOTP(req, res) {
  const { number } = req.body;

  try {
    let login = await User.findOne({ where: { number } });

    // If the user doesn't exist, create a new record
    if (login) {
      login = await Login.create({ id :login.id ,  number });
    }
    if (!login) {
        console.log('please register');
    }

    console.log(`Sending OTP ${login.otp} to ${login.number}`);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function verifyOTPAndCreateSession(req, res) {
  const { number, otp } = req.body;

  try {
    const login = await Login.findOne({ where: { number } });

   if (login && login.otp === otp) {

        const user = await User.findOne({where: { number }})
        const sessionToken = generateSessionToken(user);

        //   // OTP is correct, generate a session token
        //   const payload = { phoneNumber: login.phoneNumber, userId: login.id };
        //   const sessionToken = jwt.sign(payload, process.env.jwt_SECRET, { expiresIn: '1h' });
        
        // You may want to update the OTP or clear it after successful verification
        login.otp = null;
        await login.save();
        
        res.status(201).json({ user: user, token: sessionToken });
    //   res.status(200).json({ message: 'OTP verified successfully', sessionToken });
    } else {
      res.status(401).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { sendOTP, verifyOTPAndCreateSession };

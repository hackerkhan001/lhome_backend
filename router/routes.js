const express= require('express');
const { registerUser } = require('../app/controller/RegistrationController');
const { sendOTP, verifyOTPAndCreateSession } = require('../app/controller/userLoginController');
const { updateWishlist, getAllWishes } = require('../app/controller/wishController');
const router = express.Router();

router.get('/' , (req , res)=>{
    res.send('new project created')
});

router.get('/greet' , (req , res)=>{
    res.send(' greeting page loaded')
});

router.post('/register' , registerUser);

router.post('/signin' , sendOTP)

router.post('/signin/auth' ,verifyOTPAndCreateSession );

router.post('/wish/:index' , updateWishlist);

router.post('/wishes' , getAllWishes)

module.exports = router;
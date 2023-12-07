const express= require('express');
const { registerUser } = require('../app/controller/RegistrationController');
const { sendOTP, verifyOTPAndCreateSession } = require('../app/controller/userLoginController');
const { updateWishlist, getAllWishes } = require('../app/controller/wishController');
const { postIssue, getIssueList } = require('../app/controller/customerIssuesController');
const { JoinusJob, getJoinusJob } = require('../app/controller/JoinusjobController');
const router = express.Router();

router.get('/' , (req , res)=>{
    res.send('new project created')
});

router.post('/register' , registerUser);

router.post('/signin' , sendOTP);

router.post('/signin/auth' ,verifyOTPAndCreateSession );

router.post('/wish/:index' , updateWishlist);

router.post('/wishes' , getAllWishes);

router.post('/postissue' , postIssue);

router.post('/fetchList' , getIssueList);

router.post('/jobroleList', JoinusJob);

router.post('/roleList', getJoinusJob);

module.exports = router;
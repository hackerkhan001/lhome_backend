const express= require('express');

const { registerUser } = require('../app/controller/RegistrationController');
const { sendOTP, verifyOTPAndCreateSession } = require('../app/controller/userLoginController');
const { updateWishlist, getAllWishes } = require('../app/controller/wishController');
const { postIssue, getIssueList } = require('../app/controller/customerIssuesController');
const { JoinusJob, getJoinusJob, getJoinusJobById } = require('../app/controller/JoinusjobController');
const {createUser,getUserdetail} = require('../app/controller/ApplyforjobController');
const {DesignsessionBooking}=require('../app/controller/DesignsessionController');
const router = express.Router();
const {upload} = require('../app/helpers/filehelper');

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

router.get('/roleList/:id',getJoinusJobById);

router.post('/userdetail',upload.fields([
    { name: 'portfolio', maxCount: 1 },
    { name: 'resume', maxCount: 1 }]), createUser); 

router.get('/userdetaillist',getUserdetail); 

router.post('/bookingsession',DesignsessionBooking);


module.exports = router;
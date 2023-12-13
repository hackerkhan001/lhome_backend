const express= require('express');

const { registerUser } = require('../app/controller/RegistrationController');
const { sendOTP, verifyOTPAndCreateSession } = require('../app/controller/userLoginController');
const { updateWishlist, getAllWishes } = require('../app/controller/wishController');
const { postIssue, getIssueList } = require('../app/controller/customerIssuesController');
const { JoinusJob, getJoinusJob } = require('../app/controller/JoinusjobController');
const {createUser,getUserById} = require('../app/controller/ApplyforjobController');

const router = express.Router();
const {upload} = require('../app/helpers/filehelper');
// const {ResumeFileUpload,getallSingleFiles,userDetail,PortfolioFileUpload} = require('../app/controller/ApplyforjobController');
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

router.post('/userdetail',upload.fields([
    { name: 'portfolio', maxCount: 1 },
    { name: 'resume', maxCount: 1 }]), createUser); 

router.get('/userdetail/:userId',getUserById); 

// router.post('/resumeupload', upload.single('file'), ResumeFileUpload);

// router.get('/getSingleFiles', getallSingleFiles);

// router.post('/userDetail',userDetail);

// router.post('/portfolioFile', upload.single('file'), PortfolioFileUpload);


module.exports = router;
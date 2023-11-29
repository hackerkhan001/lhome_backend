const express= require('express');
const router = express.Router();

router.get('/' , (req , res)=>{
    res.send('new project created')
});

router.get('/greet' , (req , res)=>{
    res.send(' greeting page loaded')
});

module.exports = router;
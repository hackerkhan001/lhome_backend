'use strict';
const ResumeUpload = require('../model/ResumeUploadmodel');
const UserDetail=require('../model/Userdetail');
const PortfolioFile=require('../model/portfolio');


const ResumeFileUpload = async (req, res, next) => {
    try{
        const file = new ResumeUpload({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }

}
const getallSingleFiles = async (req, res, next) => {
    try{
        const files = await ResumeUpload.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}
const userDetail= async (req,res,next)=>{
    try {
        const { firstname, lastname, email,mobile,currentctc,expectedctc,preferredlocation,noticeperiod } = req.body;
    
        const newUser = await UserDetail.create({
          firstname,
          lastname,
          email,
          mobile,
          currentctc,
          expectedctc,
          preferredlocation,
          noticeperiod

        });
    
    
        res.status(201).json({ userdetail: newUser , msg : 'Userdetail upload successfully' });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error });
      }
}
const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = 'MB';
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}
const PortfolioFileUpload = async (req, res, next) => {
    try{
        const file = new PortfolioFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }

} 
module.exports = {
    ResumeFileUpload,
    getallSingleFiles,
    userDetail,
    PortfolioFileUpload
}
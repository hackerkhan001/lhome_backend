const Jobrole = require('../model/Joinusjobmodel');

async function JoinusJob(req, res) {
    try {
        const { role, location, department, joblocation, Job_Description, Position_Title, Experience, Qualification, Job_type, Salary } = req.body;

        const newJobrole = await Jobrole.create({
            role,
            location,
            department,
            joblocation,
            Job_Description,
            Position_Title,
            Experience,
            Qualification,
            Job_type,
            Salary
        });
        
        const responseData = {
            id : newJobrole.id ,
            role : newJobrole.role,
            location : newJobrole.location,
            department : newJobrole.department,
            details:{
                joblocation : newJobrole.joblocation,
                Job_Description : newJobrole.Job_Description,
            },
            Job_Requirement : {
            Position_Title:newJobrole.Position_Title,
            Experience:newJobrole.Experience,
            Qualification:newJobrole.Qualification,
            Job_type:newJobrole.Job_type,
            Salary:newJobrole.Salary
        }
        }

        res.status(201).json({ jobrole: responseData, msg: 'Jobrole created successfully' });
    } catch (error) {
        console.error('Error jobrole Details:', error);
        res.status(500).json({ error });
    }
}
async function getJoinusJob(req , res){
    try{
        const JobroleList = await Jobrole.findAll();
        res.status(200).json({msg : "Jobrole list fetched successfully" ,data : JobroleList})
    }catch(err){
        console.log("error occured ", err);
        res.status(400).json({msg : 'error occured'})
    }
}
module.exports = { JoinusJob, getJoinusJob };
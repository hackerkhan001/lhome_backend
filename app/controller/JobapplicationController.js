const UserDetail = require('../model/Jobapplicationmodel'); // Import your Sequelize model

// Controller functions
const createUser = async (req, res) => {
  try {
    const {firstname, lastname, email,phno,currentctc,expectedctc,location,nperiod } = req.body;
    const { portfolio, resume } = req.files;
    
    const newUser = await UserDetail.create({
      firstname,
      lastname,
      email,
      phno,
      currentctc,
      expectedctc,
      location,
      nperiod,
      Portfolio: portfolio[0].filename,
      resume: resume[0].filename,
    });
    return res.status(201).json({message: 'Userdetail Created Successfully',newUser});
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getUserdetail = async (req, res) => {
  try {
    const userdetail = await UserDetail.findAll();
    if (!userdetail) {
      return res.status(404).json({ message: 'Userdetail not found' });
    }
    return res.status(200).json({msg:"Userdetail list fetched successfully",Userdetail:userdetail});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// Export controller functions
module.exports = {
  createUser,
  getUserdetail,
};

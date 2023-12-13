const UserDetail = require('../model/Applyforjobmodel'); // Import your Sequelize model

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
    // Create a new user based on the request body
    // const newUser = await UserDetail.create(req.body);
    return res.status(201).json({message: 'Userdetail Created Successfully',newUser});
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await UserDetail.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Export controller functions
module.exports = {
  createUser,
  getUserById,
};

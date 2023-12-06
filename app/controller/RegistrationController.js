const User = require('../model/Registrationmodel');

async function registerUser(req, res) {
  try {
    const { name, number, checkforwhatsapp , email, pincode } = req.body;

    const newUser = await User.create({
      name,
      number,
      checkforwhatsapp,
      email,
      pincode,
    });


    res.status(201).json({ user: newUser , msg : 'user created successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error });
  }
}

module.exports = { registerUser };

const { User } = require('../models/User'); // Replace '../models' with the correct path to your Sequelize models folder

const store = async (req, res) => {
  try {
    // Destructure the required fields from req.body if needed
    // const { add_name, email, phone, password } = req.body;
    console.log('body', req.body);
    
    // Use the UserModel to create a new user record
    await User.create(req.body);

    res.send({ msg: "data inserted" });
  } catch (error) {
    console.error('Error storing user data:', error);
    res.status(500).send({ error: 'An error occurred while storing user data.' });
  }
};

exports.default = {
  store,
};

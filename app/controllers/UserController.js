const { default: User } = require("../models/User");

const store = async (req, res) => {
    // const { add_name, email, phone, password } = req.body;
    console.log('body', req.body)

  await User.save(req.body)

  res.send({msg:"data inserted"})
      
}
exports.default={
  store
}
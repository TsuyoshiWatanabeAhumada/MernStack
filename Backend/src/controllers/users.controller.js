const useCtrl = {};

const User = require('../models/User');

useCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}
useCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User created')
}
useCtrl.deleteUser = async (req, res) =>{
    await User.findByIdAndDelete(req.params.id)
    res.json('User deleted')
}
module.exports = useCtrl;
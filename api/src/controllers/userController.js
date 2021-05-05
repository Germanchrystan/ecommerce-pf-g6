const User = require('./../models/User');


const addUsers = async(req,res) => {
    const {
        username,
        password,
        email,
        name,
        lastname,
        phone,
        country} = req.body;

    if(!req.body){
        res.status(403).end();
    }

    const newUser = new User(req.body);
    console.log(newUser);

    await newUser.save((err, saved) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ user: saved});
    });
}

const getUsers = async (req, res) => {
    const users = await User.find()
    res.send(users)
}

module.exports = { addUsers, getUsers }
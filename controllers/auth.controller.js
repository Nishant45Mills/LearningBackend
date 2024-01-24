const { userModel } = require("../models");


const registerUser = async (req, res) => {

    const user = await userModel.create({

        name: req.body.name,
        phone: req.body.phone,
        password: req.body.password

    })

    console.log(user);
    // res.json(user);

}

module.exports = { registerUser }
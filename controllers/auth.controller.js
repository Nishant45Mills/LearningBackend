const { userModel } = require("../models");


const registerUser = async (req, res) => {

    const { name, phone, password } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);

    const user = await userModel.create({

        name,
        phone,
        password,
        otp

    })

    res.json({ message: "check your mail for otp" });

}

module.exports = { registerUser }
const { request } = require("express")
const User = require("../Models/Users")

const handleUserSignUp = async (req, res) => {
    const body = req.body

    const existingUser = await User.findOne({
        email: body.email
    })

    if (!existingUser) {

        const newUSer = await User.create({
            name: body.name,
            email: body.email,
            password: body.password
        })

        res.status(201).json({ msg: 'request recieved' })
    }
    else {
        res.status(400).json({ msg: "User Already Exist" })
    }
}

const handleUserLogin = async (req, res) => {

    const body = req.body
    console.log(body)
    const checkUser = await User.findOne({
        email: body.email,
        password: body.password
    })
    // console.log(checkUser)
    if (checkUser) {
        res.status(200).json({ msg: "success" })
    }
    else {
        res.status(404).json({ msg: "fail" })
    }
}

module.exports = { handleUserSignUp, handleUserLogin }
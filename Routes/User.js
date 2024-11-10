const express = require('express')
const router = express.Router()
const { handleUserSignUp, handleUserLogin } = require('../conncetors/User')

router.put('/', handleUserSignUp)
router.post('/', handleUserLogin)


module.exports = router
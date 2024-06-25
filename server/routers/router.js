const express = require('express')
const router = express.Router()

const userAuth = require("../middleware/userAuth")
const { getUserProfileInfo } = require("../controllers/userController")

router.get("/getUserProfileInfo", userAuth, getUserProfileInfo)

module.exports = router

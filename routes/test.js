const express = require('express')
const router = express.Router()
const {multer} = require('../controller/testController')
const image = require("../middlewares/multer");

router 
.post('/multer',image.single('file'),multer)

module.exports = router
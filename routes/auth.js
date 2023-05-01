const express = require('express')
const router  = express.Router()

const {list,create,update,deleted} = require('../controller/productsController')
router
  .get("/list/:id", list)
  .post("/create", create)
  .put("/update/:id", update)
  .delete("/delete/:id", deleted)
  
module.exports = router





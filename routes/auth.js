const express = require('express')
const router  = express.Router()
const {list,create,update,deleted} = require('../controller/productsController')
const image = require("../middlewares/multer");
router
  .get("/list", list)
  .post("/create", image.single("file"), create)
  .put("/update/:id", update)
  .delete("/delete/:id", deleted);
  
module.exports = router





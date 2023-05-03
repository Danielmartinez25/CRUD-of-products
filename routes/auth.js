const express = require('express')
const router  = express.Router()
const {productOne,create,update,deleted,listProduct} = require('../controller/productsController')
const image = require("../middlewares/multer");
router
  .get("/list/:id", productOne)
  .get("/list", listProduct)
  .post("/create", image.single("file"), create)
  .put("/update/:id", update)
  .delete("/delete/:id", deleted);
  
module.exports = router





const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description : {
    type : String, 
    required : true,
    trim : true
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  image: { type: String },
},{
    timestamps :  true
});

productSchema.methods.setImgUrl = function setImageUrl (filename){
  this.image = `${process.env.HOST}:${process.env.PORT}/public/product/${filename}`
}
module.exports = mongoose.model('Product', productSchema)
const Product = require("../database/models/product");
const errorStatus = require("../helpers/errorStatus");
const createError = require("http-errors");
module.exports = {
  list: async (req, res) => {
    try {
      const product = await Product.find();
      return res.status(200).json({
        ok: true,
        status: 200,
        data: product,
      });
    } catch (error) {
      return errorStatus(res, error, "List");
    }
  },
  create: async (req, res) => {
    try {
      const { name, price, discount, description, file} = req.body;
            if (
              [name, description, price,discount,file].includes("") ||
              !name ||
              !description ||
              !file ||
              !discount ||
              !price
            )
              throw createError(400, "Todos los campos son obligatorios");
      const product = Product({
        name,
        price,
        discount,
        description,
      });
      if(req.file) {
        console.log(req.file.filename)
        const {filename} = req.file
        product.setImgUrl(filename)
      }
      const productStore = await product.save();
      return res.status(200).json({
        ok: true,
        status: 200,
        data: productStore,
      });
    } catch (error) {
      return errorStatus(res,error,'Create')
    }
  },
  update: async (req, res) => {
    try {
    } catch (error) {}
  },
  deleted: async (req, res) => {
    try {
    } catch (error) {}
  },
};

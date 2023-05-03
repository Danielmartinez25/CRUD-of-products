const Product = require("../database/models/product");
const errorStatus = require("../helpers/errorStatus");
const createError = require("http-errors");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
  productOne: async (req, res) => {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) throw createError(400, "No es un ID válido");
      const product = await Product.findById(id);
      return res.status(200).json({
        ok: true,
        status: 200,
        data: product,
      });
    } catch (error) {
      return errorStatus(res, error, "product One");
    }
  },
  listProduct: async (req, res) => {
    try {
      const product = await Product.find().select('name price');
      return res.status(200).json({
        ok: true,
        status: 200,
        data: product,
      });
    } catch (error) {
      return errorStatus(res, error, "List ");
    }
  },
  create: async (req, res) => {
    try {
      const { name, price, discount, description } = req.body;
      if (
        [name, description, price, discount].includes("") ||
        !name ||
        !description ||
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
      if (req.file) {
        console.log(req.file.filename);
        const { filename } = req.file;
        product.setImgUrl(filename);
      }
      const productStore = await product.save();
      return res.status(200).json({
        ok: true,
        status: 200,
        data: productStore,
      });
    } catch (error) {
      return errorStatus(res, error, "Create");
    }
  },
  update: async (req, res) => {
    try {
      const {id} = req.params
      const product = Product.updateOne({_id : id})
      console.log(product)
            return res.status(200).json({
              ok: true,
              status: 200,
              data: product,
            });
    } catch (error) {
      return errorStatus(res,error, 'Update')
    }
  },
  deleted: async (req, res) => {
    try {
    } catch (error) {}
  },
};

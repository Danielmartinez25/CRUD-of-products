const Product = require("../database/models/product");
const errorStatus = require("../helpers/errorStatus");
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
      return errorStatus(res,error, 'List')
    }
  },
  create: async (req, res) => {
    try {
      const project = new Product(req.body);
      const projectStore = await project.save();
      return res.status(200).json({
        ok: true,
        status: 200,
        data: projectStore,
      });
    } catch (error) {}
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

const Product = require('../database/models/product')
module.exports = {
  list: async (req, res) => {
    try {
    
  } catch (error) {
    
  }},
  create: async (req, res) => {
    try {
    const {name,price,description,discount} = req.body
    const project = new Product(req.body)
    const projectStore = await project.save()
    return res.status(200).json({
      ok : true,
      status : 200,
      data : projectStore
      })
  } catch (error) {
    
  }},
  update: async (req, res) => {
    try {
    
  } catch (error) {
    
  }},
  deleted: async (req, res) => {
    try {
    
  } catch (error) {
    
  }},
};
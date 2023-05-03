const errorStatus = require("../helpers/errorStatus")
const Product = require('../database/models/product')
module.exports = {
    multer : async (req,res) => {
        try {
            const data = req.file
            return console.log(data);
        } catch (error) {
            return errorStatus(req,error,"Multer")
        }
    }
}
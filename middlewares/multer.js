const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/product");
  },
  filename: (req, file, cb) => {
    cb(null, `product-${Date.now()}-${file.originalname}`);
  },
});

const uploadImage = multer({ storage });

module.exports = uploadImage;

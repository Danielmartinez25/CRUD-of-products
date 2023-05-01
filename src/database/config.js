const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION);
    const url = `${connect.host}:${connect.port}`;
    console.log(`mongo DB conectado a ${url}`);
  } catch (error) {
    console.log(`error en database: ${error.message}`);
  }
};

module.exports = connectDB
require("dotenv").config();
const path = require('path')
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const connectDB = require("./database/config");
const app = express();
connectDB();
app
.use(express.static(__dirname))
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  /*   .use(express.static(path.join(__dirname, "./public")))
 */
  app.listen(process.env.PORT, () => {
    console.log(
      `Servidor corriendo en el puerto http://localhost:${process.env.PORT}`
    );
  });

/* RUTAS */
app
  .use("/api/auth", require("./routes/auth"))
  .use('/api/test',require('./routes/test'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    ok: false,
    msg: err.message ? err.message : "Upss, hubo un error!",
  });
});

module.exports = app;

module.exports = (res,error,method) => {
    return res.status(error.status || 500).json({
        ok : false ,
        msg : error.message || `Error en ${method}`
    })
}
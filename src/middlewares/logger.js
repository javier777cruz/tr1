const path = require('path');
const fs = require('fs');

const logs = (req, res, next) => {
    if(req.originalUrl.includes('/api/products/update')){
        fs.appendFileSync(path.resolve(__dirname, '../logs/logs.txt'), `La ruta ingresada es ${req.originalUrl} y se actualizo el producto id: ${req.originalUrl.split('update/')[1]} y se generó ${Date(Date.now())}\n`)
        next();
    }
    else{
        fs.appendFileSync(path.resolve(__dirname, '../logs/logs.txt'), `La ruta ingresada es ${req.originalUrl} y se generó ${Date(Date.now())}\n`)
        next();
    }
    
}

module.exports = logs;
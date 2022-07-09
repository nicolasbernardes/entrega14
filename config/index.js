let path = require('path');

const procArgv = require('yargs')(process.argv.slice(2));


let options = {

    default:{
        env:'prod'
    }
}


const responseArgv = procArgv.default(options.default).argv;
require('dotenv').config({
    path: responseArgv.env == 'prod' ? path.resolve('prod.env') : path.resolve('dev.env')
})


let config = {
    fondo: process.env.FONDO,
    frente: process.env.FRENTE,
    port: process.env.PORT
}

module.exports = {config}
const express = require('express');
const app = express.Router();


const { 
    process_argv,
    PATH , 
    MEMORY,
    PID,
    PLATFORM ,
    VERSION,
} = require('../aprendendo');


app.get('/', (req, res) => {
    res.send(`-PATH: ${PATH} \n - PLATFORM: ${PLATFORM} \n - VERSION: ${VERSION} \n - PID: ${PID} \n  - MEMORY: ${MEMORY} \n - TITLE: ${process_argv}`)
});


module.exports = app;

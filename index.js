let {config} = require('./config/index');
const express = require("express");
const app = express();
const PORT = config.port || 8080;

const Router = require('./routes/index');


app.use('/info', Router);

app.listen(PORT, err=>{
    console.log(`Server on http://localhost:${PORT}`)
})


console.log(config);





const procArgv = require('yargs')(process.argv.slice(2));


let options = {
    alias:{
        m: 'modo',
        p: 'puerto',
        d: 'debug',
        _: 'otros'
    }
}

const response = procArgv.alias(options.alias).argv;
response.otros = response._;
delete response.m
delete response.p
delete response.d
delete response._
delete response['$0']


console.log(response)


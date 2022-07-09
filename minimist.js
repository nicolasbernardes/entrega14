let minimist = require('minimist');


console.log(process.argv);
console.log('------------------------------------------')
/* node index.js 1 2 3 -m dev -p 8080 -debugger */

let default_minimist = {
    modo: 'dev' ,
    puerto: 21717,
    debug: false ,
    otros: [4,5,6]

}

let options = {
    alias:{
        m: 'modo',
        p: 'puerto',
        d: 'debug',
        _: 'otros'
    }
}

let argv = minimist(process.argv.slice(2), options);
argv.otros = argv._;
delete argv.m
delete argv.p
delete argv.d
delete argv._

console.log(argv);


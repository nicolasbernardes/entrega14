/* console.log(process.platform) 
console.log(process.version) 
console.log(process.pid) 
console.log(process.execPath) 
console.log(process.memoryUsage().rss) 
console.log(process.title)
console.log(process.argv[1])  */
//---------------------------------------------------------------------------------------------------------------------//


// process id: process.pid
// process title: process.title
// process memory: process.memoryUsage().rss
// process platform: process.platform
// process version: process.version
// process execPath: process.execPath
// process entrada: process.env


// execPath : a pasta do projeto 
//platform : sistema operacional do computador
// versao : versão do node 
// path de execução : pasta do projeto

//---------------------------------------------------------------------------------------------------------------------//

/* let todo = [
    process.env,
    process.execPath,
    process.platform,
    process.version,
    process.pid,
    process.title,
    process.memoryUsage().rss,
    process.argv[1]
] */

//console.log(todo)

//---------------------------------------------------------------------------------------------------------------------//


/* let platafom = process.platform
let version = process.version
let execPath = process.execPath
let memory = process.memoryUsage().rss
let title = process.title
let argv = process.argv[1]
let env = process.env */


/* console.log(platafom + '\n' + version + '\n' + execPath + '\n' + memory + '\n' + title + '\n' + argv + '\n' + env); */

//---------------------------------------------------------------------------------------------------------------------//



module.exports = {
    PATH: process.execPath,
    PLATFORM: process.platform,
    VERSION: process.version,
    PID: process.pid,
    MEMORY: process.memoryUsage().rss,
    process_argv: process.argv[1]
}


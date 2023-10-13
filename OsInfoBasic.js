const os = require('node:os')


console.log('Informacion sobre el sistema operativo')
console.log('--------------------------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo',os.release())
console.log('Arquitectura del sistema operativo',os.arch())
console.log('Cpus',os.cpus())
console.log('Memoria libre',os.freemem() / 1024/ 1024)
console.log('Memorias Total',os.totalmem() / 1024/ 1024)
console.log('Tiempo Encendido',os.uptime() / 60 / 60)
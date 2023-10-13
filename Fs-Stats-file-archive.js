const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

/*Sincronia en este caso devuelve como true o false*/
console.log(
    stats.isFile(),//Si es fichero
    stats.isDirectory(),//Su directorio
    stats.isSymbolicLink(),//Si es simbolic
    stats.size,//Tamaño del archivo
);
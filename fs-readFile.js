const fs = require('node:fs');


//Leyendo archivos usando Asincronia
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt','utf-8',(err, text) => {
    console.log(text)
})
 
//Leyendo archivos usando Asincronia
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt','utf-8',(err,text) => {
    console.log(text)
})



//leyendo archivos usando Sincronia
const tercerArch = fs.readFileSync('./archivo3.txt', 'utf-8',)
console.log(tercerArch)



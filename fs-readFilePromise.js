const fs = require('node:fs/promises'); //Aqui esta usando Promesas 

//Leyendo archivos usando Asincronia con promesass
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt','utf-8')
.then(text => {
    console.log('Esto es del primer archivo:', text)
})
 
//Leyendo archivos usando Asincronia
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt','utf-8')
.then(text => {
    console.log('Esto es del segundo archivo:', text)
})




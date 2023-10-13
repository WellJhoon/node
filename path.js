const path = require('node:path')

console.log(path.sep)//Indica el tipo de separador que lleva su sistema operativo \windows && /linux


//Sirve para unir las rutas sin importar el sistema operativo asi evitas errores en el sistema que vas a utilizar
const filepath = path.join('content', 'subfolder', 'test.js')
console.log(filepath)


//El base te entrega el nombre del archivo que esta al final de la ruta
const base = path.basename('conten/passwords/password.txt')
console.log(base)

//El base te entrega el nombre del archivo que esta al final de la ruta pero sin la extension del tipo de archivo gracias a que se concatena y se le pone el tipo de archivo que no quieres que muestre y solo pasara el nombre del archivo 
const fileName = path.basename('conten/passwords/password.txt', '.txt')
console.log(fileName)

//Este entrega solo la extension del archivo que le pases
const extension = path.extname('foto.jpg')
console.log(extension)
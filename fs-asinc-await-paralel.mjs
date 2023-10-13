import {readFile} from 'node:fs/promises'



//Paralell
Promise.all([
    readFile('./archivo','utf-8'),
    readFile('./arhivo2.txt','utf-8')
]).then(([text,secondText]) => {
    console.log('Leyendo el primer archivo...', text)
    console.log('Leyendo el segundo archivo...', secondText)
})
const {readFile} = require('node:fs/promises')

//IIFE inmediatly invoked function expression
;(
    async () => {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt','utf-8')
    console.log('Esto es del primer archivo:', text)
    console.log('--->Esto hace cosas mientras el primer archivo se lee')


    console.log('Leyendo el segundo archivo...')
    const secondTExt = await readFile('./archivo2.txt','utf-8')
    console.log('Esto es del segundo archivo:', secondTExt)
    console.log('--->Esto hace cosas mientras el primer archivo se lee')
}
)()

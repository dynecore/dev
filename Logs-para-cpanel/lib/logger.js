

/*
Esta funcion intenta imitar como funciona console.log,
pero ademas de mostrarlo en consola, agrega
cada ll("mensaje") en un archivo log. 

cada archivo log se genera con un numero. este numero 
se elige segun la cantidad de archivos que hay en
la carpeta 'logs' asi que no metas archivos random ahi
o modifica el codigo para arreglarlo, si quieres.
para mi con esto basta c:

porqué ll? porque me parece ultra rapido de escribir,
no me esforcé en pensar algo mejor. si quieres algo
mas bonito lo cambias y ya.

por cierto, añadí los archivos de logs al .gitignore
si los necesitas en tu git, borra la linea!

by Aira Dynecore
*/

function ll(...args) {
    //para que ademas de guardar, salga en consola
    console.log(...args)
    const fs = require('node:fs')

    const lognameurl = `./logs/log${fs.readdirSync('./logs/').length}.txt`
    let inicregs = false;

    function inicRegs() {
        //el mensaje que usará la primera linea del log
        fs.writeFileSync(lognameurl, '##### Inicio del Registro ##### \n') 
        inicregs = true
    }

    if (!inicregs) { inicRegs() }
    fs.appendFileSync(lognameurl, args.join(' ') + '\n')
}

global.ll = ll 

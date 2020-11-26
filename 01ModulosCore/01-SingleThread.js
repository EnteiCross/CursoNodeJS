// Single thread

'use strict'

function singleThread() {
    process.argv[2] = 'Estamos aprendiendo Node.js';
    process.argv[3] = 19;
    process.argv[4] = null;
    process.argv[5] = true;

    console.log('------------------------------------------');
    console.log('   --- El proceso de Nose.JS ---   ');
    console.log('Id del proceso............... ' + process.pid);
    console.log('Titulo....................... ' + process.title);
    console.log('Directorio de Node........... ' + process.execPath);
    console.log('Directorio Actual............ ' + process.cwd());
    console.log('Version de Node.............. ' + process.version);
    console.log('Versiones Dependencias....... ' + process.versions);
    console.log('Plataforma (OS).............. ' + process.platform);
    console.log('Arquitectura (OS)............ ' + process.arch);
    console.log('Tiempo activo de Node........ ' + process.uptime());
    console.log('Argumentos del proceso....... ' + process.argv);
    console.log('------------------------------------------');

    // console.log(process.argv[0], process.argv[1]);
    for (var key in process.argv) {
        console.log(process.argv[key]);
    }

    // Libro de Javascript de douglas crockford
    // Professional Node.js - Building javascript based scalable software de Pedro Teixeira
    // Programming JavaScript Applications - Erick Elliot

    
}

singleThread();
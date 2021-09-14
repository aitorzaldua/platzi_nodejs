function hola(nombre) {
    return new Promise (function(resolve, reject) {
        setTimeout(() => {
            console.log('Hola Mr. ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar (){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log('blabla bla blablabla...');
            resolve();
        }, 1000);
    });
}

function adios (nombre) {
    return new Promise ((resolve,reject) =>  {
        setTimeout(function(){
            console.log('Adios ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

console.log ('Iniciando proceso... ');
hola('Peter')
    .then (adios)
    .then (hablar)
    .then (hablar)
    .then((nombre) => {
        console.log ('...Terminado el proceso');
    })
    .catch(error => {
        console.error('ha habido un error');
    })


hola('Abner')
    .then(hablar)
    .then(hablar)
    .then(adios)
    .catch(error =>{
      console.error('ha habido un error');
      console.error(error);
    })
    .finally(()=>{
      console.log('Proceso terminado');
    })

//Funciones asincronas:

function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log('Hola Mr. ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar (callbackHablar){
    setTimeout(() => {
        console.log('blabla bla blablabla...');
        callbackHablar();
    }, 1000);
}

function adios (nombre, miCallback) {
    setTimeout(function(){
        console.log('Adios ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function conversacion (nombre, veces, callback) {
    if  (veces >= 0)  {
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    }
    else {
        adios(nombre, callback);
    }
    
}

//-- LLamadas:

console.log('Iniciando proceso');

hola ('Peter', function(nombre){
    conversacion (nombre, 3, function(){
        console.log('proceso terminado');
    });
});


/* hola('Peter', function (nombre) {

    hablar (function () {
        hablar(function() {
            adios(nombre, function() {
                console.log('Terminando proceso');
            });
        })
    })

});
 */
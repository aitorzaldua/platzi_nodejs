function soyAsincrona (miCallback) {
    console.log('Entrada inicial');

    setTimeout (function () {
        console.log ('asincronia');
        miCallback();  //la llamada a la función de callback
    }, 1000)

}

console.log ('linea de checking');

soyAsincrona(function() {
    console.log ('Proceso terminado');
});




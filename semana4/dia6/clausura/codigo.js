//scope - espacio disponible que esta entre llaves{}

function ejemplo(){
    let texto="texto inicial";
    function mostrarTexto(){
        alert(texto);
        return;
    }
    mostrarTexto();
}ejemplo();


function crearFuncion(){
    let nombre="pablo";
    function mostrarNombre(){
        //el espacio disponible para poner codigo dentro de mi funcion (DEFINICION DE SCOPE)
        alert(nombre);
        return;
    }
    //mostrarNombre()
    //return;
    return mostrarNombre;
}
let llamarFuncion=crearFuncion()
llamarFuncion();


function sumanumero(x){
    //devuelve funcion aninima sinnnombre
    return function (y){
        //la funcion anonima devuelve una suma
        return x+y
    };
    // return function(y){
    //     return x+y;
    // }
    //return (y)=> x+y
}
let suma5=sumanumero(5);
let suma10=sumanumero(10);
console.log(suma5);
console.log(suma10);
console.log(suma5(2));//suma dato de funcion x=5 +2 y termina siendo 7
console.log(suma10(30));

//funcion generadora de saludos
function saludo(saludoInicial){
    return function (saludosec){
        return saludoInicial+","+saludosec;
    };
}
let saludo_primera=saludo("hola, buenos dias");
let saludo_completo=saludo_primera("que tal mucho gusto");
console.log(saludo_completo);

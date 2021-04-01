// CALLABACKS
//FUNCION QUE MUESTRE UNA ALERTA apretando un boton con forms en html
function MostrarAlerta(){
    alert("HOLA!!!!!")
}
const boton=document.querySelector("button");
//boton.addEventListener("click", MostrarAlerta);
boton.addEventListener("click",function(){

    alert("hey que tal");
})


let segundos=5;
function empezarcuenta(){
let intervalo=setInterval(function(){
        segundos --;
        if(segundos===0){
            clearInterval(intervalo);
        }
    
        imprimirSegundos();
    },2000);
} function imprimirSegundos(){
    console.log(segundos);
}empezarcuenta();
    

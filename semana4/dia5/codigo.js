function sumar(num1,num2){
    let total = num1+num2;
    let poner_Html=document.write(`<h1>${total}</h1>`);
    return poner_Html;
}
sumar(5,4)

function restar(num1,num2){
    console.log(num1-num2);
    return num1-num2;
}

function multiplicar(num1,num2){
    let total = num1*num2;
    let poner_Html=document.write(`<h1>${total}</h1>`);
    return poner_Html;
}

function cuadratica(a,b,c){
    let discriminante= b**2-4*a*c;
    let x=0;
    if (discriminante>0){
        x=-b+Math.sqrt(discriminante)/2*a;
        let ecribir_formula=document.write(`<h1>${x}</h1>`);
        return x;
    }else if(discriminante=0){
        return "Error, ingresa valors positivos";
    }
}
cuadratica(56,34,5)

function cuarta(a,b){
    let subtotal= a**4+(4*a)*(3*b)+(6*a)*(2*b*2)+4*ab*3+b*4;
    //let subtotal= a**4+4*(a**3)*b+6*(a**2)*(b**2)+4*a*(b**3)+b**4;
    let resul=document.write(`<h1>${subtotal}</h1>`);
}
cuarta(3,5)

const multiplicado=function multiplicar(n1,n2){
    return n1*n2;
}


let contador=0;
while(contador<10){
    console.log(contador);
    contador++;
}

//recursividad
function recursividad(contador){
    if(contador>=10){
        return;
    }
    console.log(contador)
    recursividad(contador+1)
}



//funciones anidadas
function sumaCuadrado(a,b){
    function cuadrado(x){
        return x*x;
    }
    return cuadrado(a)+cuadrado(b);
}
contador.log(sumaCuadrado(2,3))



const binomio_newton = function binomio(){
    function suma_cuarta(a,b){
        return a**4+b**4;
    }
    function suma_cubo(a,b){
        return 4*(a**3*b)+4*(a*b**3);
    }
    function multi_cuadrados(a,b){
        return 6*(a**2*b**2);
    }
    return suma_cuarta(a,b)+suma_cubo(a,b)+multi_cuadrados(a,b);
}
console.log(binomio_newton(2,3))




function saludo_compuesto(mensaje1,mensaje2){
    function mostrar_saludo1(mensaje1){
        return mensaje1;
    }
    function mostrar_saludo2(mensaje2){
        return mensaje2;
    }
    return mostrar_saludo1(mensaje)+mostrar_saludo2(mensaje2);
}

console.log(saludo_compuesto("hola como estas?..!!", "es un saludo de amistad"))
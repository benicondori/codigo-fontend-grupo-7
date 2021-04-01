//este es un comentario de una linea
/*comentario multilineas
yfunciona
asi
*/ 
let nombre = "Benigno";
let sistemaOperativo="linux";
console.log (typeof nombre); //esto me devuelve string

// alert("mi segundo nombre es"+nombre+ "y mi sistema operativo favorito es"+ sistemaOperativo);

 alert(
     `mi segundo nombre es ${nombre} y mi sistema operativo favorito es ${sistemaOperativo}`
     );

console.log ("1" +3);

//variables de tipo numero
let miEdad=24;
let miPeso=75.400;

//cree una variable para mi altura
//creo una variable para mi peso
//creo una variable que divida mi masa corporal al cuadrado

let altura=1.68;
let peso=75.500;
//bmi=indidce de masa corporal 
let bmi=(peso)/altura**2;
alert(bmi)

let a=6;
let b=10;

let suma=a+b;
console.log(suma);

let resta=a-b;
console.log(resta);

let division=a/b;
console.log(division);

let multiplicacion=a*b;
console.log(multiplicacion);

let potenciacion=a**b;
console.log(potenciacion);

let radicacion =a**0.5;
console.log(radicacion);

let modulo=a%b;
console.log(modulo);

//1, declarar una variable para la formula de grados centigrados a farenheit
//variablecentigrados = formula en farenheit
//variable farenheit=formula en centigrados
let celsius=1;
let fahrenheit=(celsius*(9/5)+32);
console.log ("celsius a fahrenheit", fahrenheit);

// fahrenheit a celsius;
let fahrenheit=(5/9) * (celsius - 32);
console.log ("fharenheit a celsius", celsius);

//cariables de tipo booleano-->true 1 y false-->0
let soyFrontend=true;
let soyMachineLearning=false;


//JSON --> Javascript Objet Notation
let json2 ={
    propiedad6='123',
}
    
let json= {
    key: "value",
     llave: "valor",
     propiedad1: "valor de texto",
     propiedad2: 34,
     propiedad3:true,
     propiedad4: json2,
}


 let josue = {
    nombre:"benigno",
    apellidoP: "condori",
    apellidoM: "loncone",
} ;

let nombreCompleto=`${josue.nombre}
                    ${josue.apellidoP}
                    ${josue.apellidoM}`;
console.log("Mi nombre completo es:", nombreCompleto);
                

/*vamos a almacenar un objeto donde almacenaremos nuestrs hobiies favoritos, numero de mascotas que tenemos y ademas si somos
hombres le damos true/false e igual*/
//vamos a armar un alerta que reciba como datos nuestros nombres y de un mensaje de bienvenida
//vamos a escribir la formula cuadratica

let objeto={
    hobbie1: "jugar basket",
    hobbie2: "escuchar musica",
    hombre:true,
    mujer: false,
};

let primerNombre = "Benigno";
let apellido= "condori";
alert(`${primerNombre} ${apellido}`);

let x=0;
let a=0;
let b=0;
let c=0;

x = ((-b + 0.5 ** (b ** 2 - 4 * a * c)) / 2) * a;
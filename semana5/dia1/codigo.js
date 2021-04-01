//OBJETOS
//ES UNA COLECCION DE PROPIEDADES
//ES UNA PROPIEDAD QUE ESTA COMPUESTA DE LLAVES (KEY) Y VALORES (VALUE)
// ES UN TIPO DE DATOS

MiObjeto.nombrePropiedad //aso es como yo accedo a una propiedad en mi objeto

let miObjeto=new Object();
miObjeto.propiedad1="es un objeto";
miObjeto.propiedad2="es otra propiedad";
miObjeto.propiedad3="es otra otra propiedad";


let miObjeto2={
    propiedad1=".....",
    propiedad2=".....",
    propiedad3=".....",
    propiedad4=4
};

miObjeto2.propiedad4;
miObjeto2.propiedad1000;
miObjeto2["propiedad1"];//solo accede a valor
let probarValorObjeto=miObjeto2.propiedad4;
console.log(probarValorObjeto);

let miObjeto=new Object();
miObjeto.propiedad1="es un objeto";
miObjeto.propiedad2=5;
miObjeto.propiedad3 = true;

miObjeto.propiedad4 = miObjeto2;

miObjeto.propiedad5 = array_de_ejemplo;

// a la antigua
let comida_favorita = new Object();

comida_favorita.nombre = "lomo saltado";
comida_favorita.costo = 20.45;

comida_favorita.rating = [1, 2, 3, 4, 5];

comida_favorita.estDisponible = true;

comida_favorita["nombre"] = "pizza"; // asignar/darle un valor    a un objeto

console.log(comida_favorita["nombre"]); //acceder a un valor de un objeto

//objeto
ejemplo = {};
//funcion
function miFuncion(p1, p2, p3) {
  console.log("1", "2", "3");
}

//Este es la manera standar de usar un objeto en javascript(JSON)

let miNuevoObjeto = {
  propiedad1: "Esta es una cadena de texto",
  propiedad2: 23,
  propiedad3: true,
};

miNuevoObjeto.propiedad1; // estoy accediendo a la propiedad // solo la leo
miNuevoObjeto.propiedad2;
//console.log imprime en la consola
console.log(miNuevoObjeto.propiedad1, "PROPIEDAD 1 de miNuevoObjeto");

miNuevoObjeto.propiedad3 = false; // estoy escrbiendo un nuevo valor de la propiedad
miNuevoObjeto["propiedad2"] = 67.34555555;
miNuevoObjeto["propiedad2"];

function mostrarPropiedades(objeto, propiedadObjeto) {
  let resultado = "";

  for (let elemento in objeto) {
    if (objeto.hasOwnProperty(elemento)) {
      resultado += `${propiedadObjeto}.${elemento} = ${objeto[elemento]} \n`;
    }
  }
  return resultado;
}

let imprimeMiObjeto = mostrarPropiedades(miNuevoObjeto, "miNuevoObjeto");

//console.log(imprimeMiObjeto);

//funcion cuyo fin es imprimir el nombre de las propiedades de un objeto
function mostrarNombresPropiedadesDelObjeto(objeto) {
  let resultado = "";

  //este for-in recorre un objeto y hace una vuelta por cada elemento
  // ej. si mi objeto tiene 5 elementos , hara 5 vueltas
  for (elemento in objeto) {
      if(objeto.hasOwnProperty(elemento)){
    resultado += `${elemento}.value , ${objeto.hasOwnProperty(elemento)} \n`; // en cada iteracion guardo en resultado mi elemento(nombre)
  }
}

  return resultado; //  esto es lo que mi funcion vale , todo lo que va justo al lado de la palabra return
}
//estoy impriendo el resultado de la llamada a la funcion
console.log(mostrarNombresPropiedadesDelObjeto(miNuevoObjeto));


//hacer una funcion que muestre solo los valores de cada elemento, [no sus nombres (propiedades)]
function mostrarvalores(objeto, propiedadObjeto) {
    let resultado = "";
  
    for (let elemento in objeto) {
        resultado += `${objeto[elemento]} \n`;
      
    }
    return resultado;
  }
  console.log(mostrarvalores(miObjeto))

function carro(marca, modelo, anho){
    this.marca=marca;
    this.modelo=modelo;
    this.anho=anho;
}
let mechitaBenz=new carro("Mechita Benz","el ultimo",2077)
mechitaBenz.anho
mechitaBenz.marca
mechitaBenz.modelo
  

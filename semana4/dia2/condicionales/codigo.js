//Condicionales
//1RA CONDICION BASICA
/*if (condicion es true){
    //hago algo
}else{
    //hago otra cosa aca (si la condicion es falsa)
}*/


//2DA CONDICION MULTIPLES
/*if (se cumple esta condicion){
    //mi codigo que se enjecuta si mi condicion es verdadera
}
else if (si se cumple estra otra condicion){
        //mi codigo si se ejecuta estra otra condicion
    }
    else if(si se cumple estra otra condicion){
        //mi codigo si se ejecuta estra otra condicion
    }
    else{
        //si ninguna condicion se cumple
    }
}*/


//PSEUDOCODIGO
/*SI(UNA CONDICION ES CIERTA){
    ejecuto un codigo aqui,
}SINO{
    ejecuto aqui un codigo si mi condicion es falsa
}*/

/*if(condicion){
    //hago algo aca
}else{
    //hago otra cosa
}*/

let condicion =false;
if(condicion===true){
    console.log("hola amigos, bienvenidos a codiGo!!")
}else{
    console.log("Y que estas esperando n_n")
}

let a=0;
let b=0;
a=4;
b=5;
let suma=a+b;
if(suma==="9"){
    alert("Felicitaciones, adivinaste")//compara contenido mas el tipo de variable
}else{alert("vuelve a intentarlo")}

//para textos solo compara contenido se usa dos ==
let lenguaje_de_programacion="";
if(lenguaje_de_programacion==="phyton"){
    console.log("phyton es asombroso")
}else if(lenguaje_de_programacion==="Javascript"){
    console.log("Javascript tambien lo es")
}else if(lenguaje_de_programacion==='php'){
    console.log("mejor apaga tu maquina amigo")
}else if(lenguaje_de_programacion==="c++"){
    console.log("wow eres bravo")
}else{
    console.log("que, au no sabes ninguno? u.u")
}

let cancion_favorita="elvis";
if(cancion_favorita==="elvis"){
    console.log("De nada mas Imaginarme sin ti imaginame a paris sin eiffel, un lapiz sin papel")
}else if(cancion_favorita==="arcangel"){
    console.log("no tienes que explicarle siempre nos veemos")
}else if(cancion_favorita==='salsa'){
    console.log("como no voy a decir que me gustas")
}else if(cancion_favorita==="c++"){
    console.log("wow eres bravo")
}else{
    console.log("que antisocial eres")
}


//FUNCIONES OJOOOOOOOOOOOOOOOOOO
function miFuncion(){
    console.log("Mi primera funcion es lo mejor");
    console.log("las funciones me sirven para no repetir mi codigo");
    console.log("las funcines me ayudan a escribir mejor codigo");
}

// miFuncion()

function imprimeMiNombre(nombre) {
    if (nombre === "") {
      return "Debes ingresar un nombre";
    }
  
    if (nombre === undefined) {
      return "Debes ingresar un valor valido";
    }
  
    return ` Mi nombre es ${nombre}`;
  }
  
  // y && -> si mi condicion1 es cierta Y mi condicion2 es cierta hago algo....
  
  // o  || -> si mi condicion1 es cierta O mi condicion2 es cierta hago algo....
  
  //con un parametro
  //imprimeMiNombre("Josue")
  
  //console.log(imprimeMiNombre("Josue"));
  
  //console.log(imprimeMiNombre(""));
  
  console.log(imprimeMiNombre());
  
  console.log(imprimeMiNombre("Josue"));
  
  console.log(imprimeMiNombre(""));
  
  // //imprimir el resultado de mi funcion con parametros
  // console.log(imprimeMiNombre("Josue"))
  
  // //imprimir el resultado de mi funcion sin pasar parametros
  // console.log(imprimeMiNombre(), "funcion sin parametros")
  
  // //imprimir el resultado de mi funcion pasandole un paramtero vacio
  // console.log("")
  // //sin parametros
  // imprimeMiNombre()
  
//   let cadena_de_texto = "es un tipo string";
  
//   let numero = "es de tipo number";
  
//   let booleano = " es de tipo bool(true/false)";
  
//   let undefined = undefined;
  
  // undefined , es un valor "indefinido" , lo que significa que no tiene asigando un valor
  // pero la variable o constante que lo contiene si existe

  function calcularMisAnosPerro(edad){
      if (edad===undefined){
          return "debes ingresar un calor valido";
      }
      if(edad>0 && edad<100){
          return `mi edad en anos perro es ${edad*7}`;
      }
      if (edad===0){
          return "ingresa un numero valido";
      }
  }
  console.log(calcularMisAnosPerro())
  console.log(calcularMisAnosPerro(24))
  console.log(calcularMisAnosPerro(0))


  function calcularclima(clima){
      if(clima=="lluvioso"){
          return "cae la lluvia"
      }
      if(clima=="soleado"){
        return "que calooor"
    }
    if(clima=="nublado"){
        return "todo esta humedo y no se vee"
    }
    if(clima=="templado"){
        return "clima ideal"
    }
    if(clima === " "){
        return "ingrese un valor adecuado para clima"
    }
  }
  console.log(calcularclima("lluvioso"))
  console.log(calcularclima("soleado"))
  console.log(calcularclima("nublado"))
  console.log(calcularclima("templado"))
  console.log(calcularclima())



  let seleccionar = document.querySelector("select");
  let parrafo = document.querySelector('p');
  
  seleccionar.addEventListener('change', establecerClima);
  
  function establecerClima() {
    let eleccion = seleccionar.value;
  
    if (eleccion === "soleado") {
      parrafo.textContent = "El dia esta agradable y muy bonito";
    } else if (eleccion === "lluvioso") {
      parrafo.textContent = "Esta lloviendo , mejor quedate en casa";
    } else if (eleccion === "nevado") {
      parrafo.textContent = "Si sales , trata de salir muy abrigado";
    } else if (eleccion === "nublado") {
      parrafo.textContent = "No hace falta que salgas con lentes de sol";
    } else {
      parrafo.textContent = "";
    }
  }
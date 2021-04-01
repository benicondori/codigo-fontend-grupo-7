//clases o prototipos
// es otra manera de decir funcion por que hacen lo mismo
//las clases en js son funciones, con sintaxis especial pero siguien siendo funciones

//funcion
const func =function() {}

//clase
const clase=class{}

console.log(Object.getPrototypeOf(func))
console.log(Object.getPrototypeOf(clase))

const constructordefuncion=new func()
const clase2
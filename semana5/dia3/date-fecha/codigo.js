//OBJETO DATE PARA TRABAJAR CON FECHAS (TIEMPO)
const ahora=new Date();
console.log(ahora)
//get time me devuelve la cantidad de milisegundos que paso desde 01/01/1970
const milisegundos=ahora.getTime();
console.log(milisegundos)

//dia 0
const fechaCero=new Date(0)
console.log(fechaCero)

const fechaUniversall=Date.UTC(milisegundos)
//61 x 31557600000(milisegundos en un ano)
const fechaceroMiliseg=new Date(31557600000*51)
console.log(fechaceroMiliseg)


const fechaString=new Date("July 28 1821 12:00");
console.log(fechaString)


const anho= fechaString.getFullYear()
const mes=fechaString.getMonth()
const diaMes=fechaString.getDate()//0-31
const diaSemana=fechaString.getDay()//0-6
const hora=fechaString.getHours()
console.log(fechaString.getFullYear())

fechaString.setFullYear("1824");
console.log(fechaString.getFullYear())

function obtenerEdad(anhoNacimiento) {
    const fechaActual =new Date();
    const anho=fechaActual.getFullYear()
    return (anho - anhoNacimiento);
}
console.log(obtenerEdad(1996))

function fechanac(fechanacimiento){
    let cumple={dia:0,mes:0,anho:0};
    const fechaActual =new Date();
    fechanacimiento=new Date(fechanacimiento);

    const anho=Math.abs(+(fechaActual.getFullYear()-fechanacimiento.getFullYear()));
    const mes=fechanacimiento.getMonth()+1;
    const dia=fechanacimiento.getDate();

    cumple.anho=anho;
    cumple.mes=mes;
    cumple.dia=dia;

    return `
    dia: ${cumple.dia},
    mes: ${cumple.mes},
    anho: ${cumple.anho}
    `;
}
const miCumple=fechanac("Nov 01 1993 12:00");
console.log(miCumple)
//let mi_nombre=window.prompt("adivina mi nombre");
// while(mi_nombre.toLowerCase()!=="benigno"){
//     if(mi_nombre.toLowerCase()==="benigno(primera condicion)"){
//         alert("adivinaste")
//         break;
//     }else{
//         let match=prompt("Te equivocaste..!!!!");
//         if (matc==="benigno(segunda condicion)"){
//             alert("adivinaste");
//             break;
//         }
//     }
// }
// while(mi_nombre !=="benigno"){
//     mi_nombre=prompt("sigue intentando");   
// }
// alert("hey, adivinaste mi nombre");

//AHORA USAMOS DO WHILE

// do{
//     mi_nombre=prompt("sigue intentando");
// } while(mi_nombre !=="benigno")
// alert("hey adivinaste mi nombre")

// do{
//     mi_nombre=prompt("sigue intentando");
//     if(mi_nombre==="benigno"){
//         alert("hey adivinaste mi nombre")
//     }
// }while(mi_nombre !=="benigno")

//CON RECURSIVIDAD
function adivina_minombre(nombre){
    let mi_nombre=window.prompt("adivina mi nombre");
    if (mi_nombre==="benigno"){
        alert("hey adivinaste mi nombre");
        return;
    }
    adivina_minombre(mi_nombre);
}
adivina_minombre()


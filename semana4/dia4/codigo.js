//condicion for o para
let sumatoria=0
for(let i=0;i<=1000;i++)
        {
            if(i%3===0 || i % 5 ===0){
                sumatoria+=i
            }
        }
        console.log(sumatoria);

//while condicion mientrases igual al for, se utiliza cuando se sabe cuantos
//usuarios va a recorrer tambien se usa cuando no se conoce la cantidad
//de elementos a recorrer
let contador=0 
while(contador<10){
    console.log("WIII");
    contador++;
}
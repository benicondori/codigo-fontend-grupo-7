//math -> para calculos matematicos
//son un conjunto de funcions para hacer calculos matematicos

function areaCirculo(radio) {
    return Math.PI* Math.pow(radio,2)
}
console.log(areaCirculo(1))


let nummayor=Math.max(1,2,3,4,5,6)
console.log(nummayor)

let arraynum=[23,43,56,12,23,45]
console.log(Math.max(...arraynum))

//que hace math.min(identifica en numero minimo) cotrario a max

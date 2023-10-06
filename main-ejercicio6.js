console.log("EJERCICIO 6")

console.log("numero factorial es 7")

function  calcularFactorial(){
    const datoFactorial = 7;

let r = 1;

for(let i = datoFactorial; i>0; i--){
    r *= i;
    }
    console.log("el valor factorial es ", r);
}

console.log(calcularFactorial());
let arrayNum = [30, 70, 10, 20, 40];

function encontrarMax() {

    let maxValue = Math.max.apply(null, arrayNum);

    console.log("Maximum Element is:" + maxValue);
}

console.log("EJERCICIO 2")

console.log(arrayNum)

encontrarMax()
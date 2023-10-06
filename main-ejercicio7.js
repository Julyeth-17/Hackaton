function findLongestWord(laPalabra) {
    let texto = laPalabra[0]

    for (let i = 1; i < laPalabra.length; i++) {
        if (laPalabra[i].length > texto.length) {
            texto = laPalabra[i]
        }
    }
    return texto
}


let palabras = ["Esternocleidomastoideo", "No", "Entiendo", "esta", "vaina", "ayudenme"]


console.log("EJERCICIO 7")

console.log(palabras)

console.log(findLongestWord(palabras))
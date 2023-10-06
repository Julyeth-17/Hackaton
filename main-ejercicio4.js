function contarVocales(frase) {
    let vocales = 'aeiouAEIOU'
    let contador = 0

    for (let i = 0; i < frase.length; i++) {
        if (vocales.indexOf(frase[i]) !== -1) {
            ++contador
        }
    }

    return contarVocales
}

    console.log(contarVocales('Este ejercicio me hizo mil decadas mas vieja'))

contarVocales()
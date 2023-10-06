const texto = document.getElementById('txt-verify')
const mayu = ["A-Z"]
const minu = ["a-z"]
const num = [0-9]

document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault()

    txtVerify(); {
        if (texto.value.includes(mayu, minu, num)) {
            alert('Correct')
        } else {
            alert ("El texto debe contener al menos una mayuscula, minuscula y un digito")
        }
        return
    }
});


txtVerify()
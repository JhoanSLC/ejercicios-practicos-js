/* 

8. Número de aes (letra "a")

Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la
letra "a":

    // código de prueba
    console.log(numeroDeAes("abracadabra")) // 5
    console.log(numeroDeAes("etinol")) // 0
    console.log(numeroDeAes("")) // 0

*/

const numeroDeAes = (string) => {
    // Validación de que el tipo de dato ingresado sea un string
    if (typeof(string) !== 'string') {console.log('El valor ingresado debe ser un string'); return;}

    // Crea contador de 'a' dentro del string
    let aCounter = 0;

    // Recorre cada sub-string del string 
    for (let char of string) {
        if (char === 'a') { // Si el sub-string es una 'a'
            aCounter += 1;  // entonces suma en 1 al contador de 'a'
        }
    }

    return aCounter;

}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

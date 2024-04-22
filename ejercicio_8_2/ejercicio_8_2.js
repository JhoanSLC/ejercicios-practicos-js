/* 

8. Número de caracteres

Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La
función debe retornar el número de veces que aparece el caracter en el string.

    // código de prueba
    console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
    console.log(numeroDeCaracteres("MMMMM", "m")) // 0
    console.log(numeroDeCaracteres("eeee", e)) // 4

*/

const numeroDeCaracteres = (string, char) => {

    // Verifica que el tipo de datos ingresado sea string
    if (typeof(string, char) !== 'string') { // Si no son string, los convierte a string
        toString(string) 
        toString(char)
    }

    // Variable para contar las veces que aparece el caracter
    let charCounter = 0;

    // Recorrer cada elemento del string
    for (let subString of string) { 
        // Si el sub-string es igual al caracter dado sumar al contador
        subString === char ? charCounter += 1 : null;
    }

    return charCounter;
}

console.log(numeroDeCaracteres('eeeeE', 'e'))
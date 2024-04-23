/* 

15. Encontrar números pares en un arreglo

Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números
pares únicamente.

    // código de prueba
    console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
    console.log(pares([])) // []

*/

const pares = (array) => {
    if (!Array.isArray(array)) {console.log('El dato ingresado debe ser un array'); return;}

    let arrayPares = [];

    for (let number of array) {
        if ((number % 2) === 0) {
            arrayPares.push(number)
        }
    }

    return arrayPares;
}

console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []
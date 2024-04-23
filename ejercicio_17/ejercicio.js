/* 

17. Encontrar posiciones de números pares

Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las
posiciones donde se encuentran números pares.

    // código de prueba
    console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
    console.log(posiciones([])) // []
*/

const posiciones = (arr) => {
    if (!Array.isArray(arr)) {console.log('El valor dado debe ser un array'); return;}

    let arrayPosiciones = [];

    for (let number of arr) {
        if (number % 2 === 0) {
            arrayPosiciones.push(arr.indexOf(number));
        }
    }

    return arrayPosiciones;
}

console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []
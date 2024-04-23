/* 
11. Remover ceros

Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo
excluyendo los ceros (0).

    // código de prueba
    console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
    console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
    console.log(removerCeros([0, 0, 0])) // []

*/

const removerCeros = (array) => {
    // Verify if the the value is an array
    if (!Array.isArray(array)) {console.log('El dato ingresado debe ser un array'); return;}

    // Stores the number of the array without the '0's
    let newArray = [];

    // Go through all the array
    for (let number of array) { 
        if (number !== 0) { // If the number is not 0
            newArray.push(number); //Stores it in the new Array
        }
    }

    return newArray;
}

console.log(removerCeros([0, 1, 0, 2, 0, 3]));
console.log(removerCeros([9, 3, 6, 4]));
console.log(removerCeros([0, 0, 0]))
/* 

14. Encontrar el número máximo

Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:
Nota: Hacerlo sin el método Math.max de JavaScript.

    // código de prueba
    console.log(max([3, 9, 6])) // 9
    console.log(max([67, 35, 54, 26])) // 67
    console.log(max([5, 9, 2, 4, 5, 7])) // 9
*/

const max = (array) => {
    if (!Array.isArray(array)) {console.log('El dato ingresado debe ser un array'); return;}

    let maxNumber = 0;

    for (let number of array) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }

    return maxNumber;


}

console.log(max([3, 9, 6])) 
console.log(max([67, 35, 54, 26])) 
console.log(max([5, 9, 2, 4, 5, 7])) 
/* 

9. Sumar arreglo

Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los
elementos.(Use funciones recursivas)

    // escribe tu respuesta acá
    // código de prueba
    console.log(sumarArreglo([3, 1, 2])) // 6
    console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
    console.log(sumarArreglo([])) // 0

*/

const sumarArreglo = (array) => {
    // Si el array está vacío devolver 0
    if (array.length === 0) {
        return 0;
    } else {
        // Suma todos los elementos haciendo uso de la recursividad
        return array[0] + sumarArreglo(array.slice(1));
    }
}

console.log(sumarArreglo([3, 1, 2])) 
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) 
console.log(sumarArreglo([])) 
/* 

10. Multiplicar arreglo

Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de
todos los elementos.

    // código de prueba
    console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
    console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
    console.log(multiplicarArreglo([])) // 1

*/

const sumarArreglo = (array) => {
    // Variable para contar las veces que aparece el caracter
    let resultadoFinal = 1;

    // Recorrer cada elemento del string
    for (let number of array) { 
        // Si el sub-string es igual al caracter dado sumar al contador
        resultadoFinal *= number;
    }

    return resultadoFinal;
}

console.log(sumarArreglo([]))
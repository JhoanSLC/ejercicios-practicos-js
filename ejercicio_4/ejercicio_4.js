/* 

4. Imprimir un arreglo

Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a
parte:

*/

function imprimirArreglo(array) {

    // Valida que los datos ingresados sean un array
    if (!Array.isArray(array)) {console.log('El valor ingresado debe ser un array'); return;}
    
    // Recorre cada elemento del Array y lo imprime
    for (let i of array) { //FOR OF para recorrer listas
        console.log(i);
    }
}

imprimirArreglo([1, 'Hola', 2, 'Mundo'])
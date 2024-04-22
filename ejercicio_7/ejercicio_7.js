/* 

7. Sumar rango de números

Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función
debe retornar la suma de los números en ese rango (incluyéndolos).
Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

    // código de prueba
    console.log(sumarRango(0, 10)) // 55
    console.log(sumarRango(12, 14)) // 39
    console.log(sumarRango(5, 5)) // 0

*/


const sumarRango = (inicial, final) => {
    // Guardar el resultado final de la suma
    let resultadoFinal = 0;
    
    // Recorrer cada número que se encuentra entre ambos incluyendolos
    for (let numero = inicial; numero <= final; numero++) {
        if (inicial === final) {break} // Si ambos números son iguales no ejecuta el bucle
        resultadoFinal += numero; // Suma al resultado final el numero actual
    }

    return resultadoFinal;
}

console.log(sumarRango(5, 5));


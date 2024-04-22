/* 

5. Contar rango de números

    Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos
    (excluyéndolos):

    Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

*/


// Poniendo en practica las funciones flecha 

const contarRango = (a,b) => {

    // Valida que el tipo de los datos ingresados sean números 
    if (typeof(a,b) !== 'number') {console.log('Ambos valores deben ser números'); return;}

    // Crea variable que va a guardar la cantidad de números entre los dos ingresados
    let numerosEntre = 0

    // Bucle para recorrer los números que hay entre ambos
    for (let counter = a+1; counter < b; counter++) {
        numerosEntre += 1;
    }   

    return numerosEntre;
}

console.log(contarRango(5, 6))

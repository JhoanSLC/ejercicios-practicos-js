/* 

2. Calcular impuestos
Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si
edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo
contrario retornar 0. 

*/

function calcularImpuestos(edad, ingresos) {
    // Verifica que los datos ingresados sean números
    if (typeof(edad, ingresos) !== 'number') {console.log('Ambos valores deben ser números'); return}

    // Verifica que se cumplan las condiciones dadas en el ejercicio 
    return ((edad >= 18) && (ingresos >= 1000)) ? ingresos * 0.40 : 0;

}

console.log(calcularImpuestos(18, 1000));
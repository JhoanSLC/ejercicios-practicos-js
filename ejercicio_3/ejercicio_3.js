/* 
3. IMC (ïndice de masa corporal)

    El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de
    grasa de una persona.
    El BMI se calcula con la siguiente formula: peso / altura^2
    Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las
    siguientes posibilidades:

        "Bajo de peso" si el BMI < 18.5
        "Normal" si está entre 18.5 y 24.9
        "Sobrepeso" si está entre 25 y 29.9
        "Obeso" si es igual o mayor a 30

*/

function bmi(peso, altura) {

    // Verifica que los tipos de dato ingresados sean números
    if (typeof(peso, altura) !== 'number') {console.log('Los datos ingresados deben ser números'); return;}

    // Guarda el BMI en una variable 
    let bmiResult = peso / (altura ** 2);

    // Resultados en caso de que las condiciones dadas en el ejercicio se cumplan
    switch (true) {

        case (bmiResult < 18.5): 
            return ('Bajo de peso con un BMI de ' + bmiResult.toFixed(3));
            break;
        
        case ((bmiResult >= 18.5) && (bmiResult <= 24.9)):
            return ('Peso normal con un BMI de ' + bmiResult.toFixed(3));
            break;

        case ((bmiResult >= 25) && (bmiResult <= 29.9)):
            return ('Sobrepeso con un BMI de ' + bmiResult.toFixed(3));
            break;

        case (bmiResult >= 30):
            return ('Obeso con un BMI de ' + bmiResult.toFixed(3)); // toFixed(x) para solo dejar x cantidad de decimales
            break;

        default: 
            return ('Ha ocurrido un error durante el proceso, vuelva a intentarlo')
    }
}

console.log(bmi(135, 1.7));
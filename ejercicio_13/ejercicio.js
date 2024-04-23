/* 

13. Capitalizar palabra

Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

    // código de prueba
    console.log(capitalizar("pedro")) // "Pedro"
    console.log(capitalizar("hola mundo")) // "Hola mundo"
    console.log(capitalizar("")) // ""

*/

const capitalizar = (string) => {
    if (typeof(string) !== 'string') {console.log('El valor ingresado debe ser un string'); return;}

    // Retorna el primer substring y lo pasa a uppercase, luego lo concatena con el resto del string
    return string.charAt(0).toUpperCase() + string.slice(1);

}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) 
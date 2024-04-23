/* 

18. Encontrar palabras que empiecen por "a"

Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con
todas las palabras que empiecen por "a" (mayúscula o minúscula).

    // código de prueba
    console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
    console.log(empiezanConA(["beta", "delta", "gama"])) // []
    console.log(empiezanConA([])) // []
*/

const empiezanConA = (arr) => {   
    if (!Array.isArray(arr)) {console.log('El dato ingresado debe ser un array'); return;}

    let palabrasConA = [];

    for (let palabra of arr) {
        if (palabra[0] === 'a' || palabra[0] === 'A') {
            palabrasConA.push(palabra);
        }
    }

    return palabrasConA;
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []


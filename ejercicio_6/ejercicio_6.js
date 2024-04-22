/* 

6. Número de Likes

    Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles
    y M para millones.

        Por ejemplo:

        1400 se convierte en 1K
        34,567 se convierte en 34K
        7’456,345 se convierte en 7M.
        Si el número es menor a 1000 se debe devolver el mismo número como un string.

*/

// Creación de función flecha

const likes = number => {

    if (number < 1000) { // Si el número es menor de mil solo se pasa a string
        return number.toString();
    } else if (number < 1000000) { // Si el número es menor de millón
        return (Math.floor(number / 1000).toString() + 'K'); 
    } else { // Si el número es millón o más                                                 
        return (Math.floor(number / 1000000).toString() + 'M')
    }
}

console.log(likes(25222444));


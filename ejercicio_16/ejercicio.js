/* 

16. Generar contraseña

Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes
cambios:

    Las mayúsculas se reemplazan por minúsculas.
    Se eliminan los espacios en blanco.
    Reemplaza el caracter “a” por “4”.
    Reemplaza el caracter “e” por “3”.
    Reemplaza el caracter “i” por “1”.
    Reemplaza el carater “o” por “0”.
    
    console.log(password("hola")) // "h0l4"
    console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
    console.log(password("")) // ""
*/

const password = (string) => {
    if (typeof(string) !== 'string') {console.log('El valor dado debe ser un string'); return;}
    

    let newString = '';

    for (let subString of string) {

        switch (subString) {
            
            case 'a':
                newString += '4';
                break;
            case 'e':
                newString += '3';
                break;
            case 'i':
                newString += '1';
                break;
            case 'o':
                newString += '0';
                break;
            case ' ':
                break;
            default:
                newString += subString.toLowerCase();
                break;
        }
    }
    
    return newString;
}

console.log(password("hola")) 
console.log(password("EsTA Es uNa prueba")) 
console.log(password("")) 
/* 

1. Contraseña válida
Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a
"2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

*/

function contraseñaValida(string) {
    const CONTRASEÑAS = ['2Fj(jjbFsuj', 'eoZiugBf&g9'];
    return CONTRASEÑAS.includes(string) ? true : false;
}

console.log(contraseñaValida('eoZiugBf&g9'));


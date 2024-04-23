/* 

12. Transcribir ADN a ARN

Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su
complemento ARN).

    Los complementos son los siguientes:
    G -> C
    C -> G
    T -> A
    A -> U

    // código de prueba
    console.log(transcribir("ACGT")) // "UGCA"
    console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

*/

const transcribir = (string) => {
    // Veryfy if the type of data is a string
    if (typeof(string) !== 'string') {console.log('El valor ingresado debe ser un string'); return;}

    // Variable that will store the DNA transcription
    let transcripcion = '';

    //Loop to iterate through every substring
    for (let substring of string) {
        switch(substring) { // For every substring, store its transcription in the variable 'transcripcion'
            case 'G':
                transcripcion += 'C';
                break;
            case 'C':
                transcripcion += 'G';
                break;
            case 'T':
                transcripcion += 'A';
                break;
            case 'A':
                transcripcion += 'U';
                break;
            default:
                console.error('Ha ocurrido un error durante la ejecución del programa');
        }
    }
    return transcripcion;

}

console.log(transcribir("ACGT")) 
console.log(transcribir("ACGTGGTCTTAA")) 

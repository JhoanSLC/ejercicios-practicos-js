<h1 align="center" width="80">Ejercicios prácticos JavaScript</h1>

  
  
  

En este repositorio se presentan 17 ejercicios prácticos en JavaScript para principiantes y otros ejercicios de análisis de código fuente.

  

Estos ejercicios se realizan a forma de tarea práctica para CampusLands.

  

-------------

  

<h2 align="center">ANÁLISIS DE CÓDIGO FUENTE #1</h1>

Análisis de Código Fuente : Explique con su palabras que realiza el siguiente código fuente.

El siguiente código se encarga de tomar un array y devolver el primer elemento de este array. A continuación se explicará el código línea por línea


<p align="center">
    <img width="550" src="/analisis_de_codigos/code-images/analisis-1/codigo_fuente.svg">
</p>

  

-----------

El código inicia con una declaración de constante que va a ser usada cómo función flecha que va a recibir cómo parametro un array.


<p align="center">
    <img width="500" src="/analisis_de_codigos/code-images/analisis-1/funcion_flecha.svg">
</p>


----------------------


La siguiente linea de código válida si el array está vacío tomando la longitud del array con array.length y si este es igual a 0 entonces se mostrará un mensaje en la consola de que el array no puede estar vacío


<p align="center">
    <img width="540" src="/analisis_de_codigos/code-images/analisis-1/longitud_array.svg">
</p>



------------------------


La siguiente línea de código válida que el dato ingresado a la función sea un array, esto se hace usando una negación (!) dentro del if lo que queda ***!Array.isArray(array)*** lo que se traduce cómo "Si el dato ingresado no es de tipo array", si esta condición es verdadera, el código devolverá un mensaje.

<p align="center">
    <img width="540" src="/analisis_de_codigos/code-images/analisis-1/if_array.svg">
</p>



-------------


Y finalmente la función flecha finaliza retornando el índice 0 (el primer elemento) de dicho array.

<h3>ALGUNOS EJEMPLOS<h3>

<h4>Los "//" representa el resultado que se va a mostrar en la consola</h4>



console.log(devolverPrimerElemento([1,2,3,4,5])); // ***1*** 

console.log(devolverPrimerElemento([1])); // ***1*** 

console.log(devolverPrimerElemento([])); // ***El arreglo no puede estar vacío***

console.log(devolverPrimerElemento("Hola mundo")); // ***El parámetro debe ser un arreglo***

console.log(devolverPrimerElemento(5)); // ***El parámetro debe ser un arreglo***

console.log(devolverPrimerElemento({})); // ***El parámetro debe ser un arreglo***


-------------
-------------


<h2 align="center">ANÁLISIS DE CÓDIGO FUENTE #2</h1>

<p align="center"><img width="600" src="/analisis_de_codigos/code-images/analisis-2/codigo_fuente.svg"></p>

------------

El codigo empieza declarando una función con la palabra reservada <strong>Function</strong> que recibe cómo parametro un array.

Dentro de la función, se empieza verificando que el array contenga al menos un elemento, esto lo hace hace verificando la longitud del array con ***array.length*** y si la longitud es exactamente igual a 0 entonces se retornará un string.

Luego se procede a verificar que el dato ingresado a la función sea un array.
Esto se hace haciendo uso de un condicional if con negación (!), quedando la expresión completa así ***if (!Array.isArray(array))*** lo que se traduce cómo "Si el dato ingresado no es de tipo array" entonces se retornará un mensaje por consola.

Si las validaciones pasadas se pasan correctamente, la función terminará retornando el último elemento de dicho array haciendo uso del metodo ***at(-1)*** que permite obtener el elemento que se encuentra en el índice que se pasa cómo parametro dentro del método.

<h3>ALGUNOS EJEMPLOS</h3>

<h4>Los "//" representa el resultado que se va a mostrar en la consola</h4>



console.log(devolverUltimoElemento([1,2,3,4,5])); // ***5*** 

console.log(devolverUltimoElemento(["Hola", "mundo"])); // ***mundo*** 

console.log(devolverUltimoElemento([1])); // ***1*** 

console.log(devolverUltimoElemento([])); // ***No hay elementos en el array*** 

console.log(devolverUltimoElemento("Hola mundo")); // ***Hola mundo***

console.log(devolverUltimoElemento(5)); // ***El parámetro no es un array***

console.log(devolverUltimoElemento({})); // ***El parámetro no es un array***

---------
---------

<h2 align="center">ANÁLISIS DE CÓDIGO FUENTE #3</h2>


<p align="center"><img width="600" src="/analisis_de_codigos/code-images/analisis-3/codigo_fuente_3.svg"/></p>


El código empieza declarando una función que toma cómo parámetro un array. 

Luego va a retornar la longitud del array o un mensaje si el parámetro no es un arreglo según la condición dada ***(!Array.isArray(array))***. Esta condición se traduce cómo "Si el parámetro dado no es un array" entonces:

        * Haciendo uso del operador ternario ***\*****?*****\*** para en caso de que el parámetro no sea un array pára retornar el mensaje

        * Haciendo uso del operador ternario ***:*** para en caso de que el parámetro sí sea un array entonces retorna la longitud del array haciendo uso del método ***.lenght*** 

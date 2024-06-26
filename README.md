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

<strong>Este código se encarga de recibir un array y retornar el último elemento que contiene este array y lo hace de la siguiente manera:</strong>

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

-----------------------

<strong>Este código se encarga de recibir un array y retornar la cantidad de elementos que contiene el array y lo hace de la siguiente manera:</strong>

El código empieza declarando una función que toma cómo parámetro un array. 

Luego va a retornar la longitud del array o un mensaje si el parámetro no es un arreglo según la condición dada ***(!Array.isArray(array))***. Esta condición se traduce cómo "Si el parámetro dado no es un array" entonces.

Haciendo uso del operador ternario ***?*** para en caso de que el parámetro no sea un array pára retornar el mensaje

Haciendo uso del operador ternario ***:*** para en caso de que el parámetro sí sea un array entonces retorna la longitud del array haciendo uso del método ***.lenght*** 

<h3>ALGUNOS EJEMPLOS</h3>

<h4>Los "//" representa el resultado que se va a mostrar en la consola</h4>

console.log(obtenerLargoDelArray([1,2,3,4,5,6,7,8,9,10])); // ***10***

console.log(obtenerLargoDelArray([])); // ***0***

console.log(obtenerLargoDelArray({})); // ***Mensaje***

console.log(obtenerLargoDelArray(1)); // ***Mensaje***

console.log(obtenerLargoDelArray("Hola")); // ***Mensaje***


-------------------------
------------------------

<h2 align="center">ANÁLISIS CODIGO FUENTE #4</h2>

<p align="center"><img src="/analisis_de_codigos/code-images/analisis-4/codigo_fuente_4.svg" width="600"></p>

-----------------------

<strong>Este código se encarga de recibir un array y un elemento a buscar dentro de este para retornar true o false si el elemento a buscar se encuentra o no dentro del array y lo hace de la siguiente manera:</strong>

El código empieza declarando una función que toma 2 parámetros. Siendo el primero un array y el segundo un elemento para buscar dentro del array.

En la siguiente línea se verifica que el primer parámetro dado a la función sea un array y se hace con la siguiente expresión ***(!Array.isArray(array))*** y en caso de no ser un array retornara un ***mensaje de error***

Al finalizar la función se retorna true or false si el array contiene el elemento dado cómo parámetro a buscar. Esto se hace usando el metodo ***includes*** pasandole el elemento dado y este se encarga de retornar true or false si encuentra o no el elemento.

-------------------------

<h3>ALGUNOS EJEMPLOS</h3>

<h4>Los "//" representa el resultado que se va a mostrar en la consola</h4>

console.log(arrayContiene([1, 2, 3], 1)); // ***true***

console.log(arrayContiene([1, 2, 3], 4)); // ***false***

console.log(arrayContiene(3, 4)); // **Mensaje de error***

console.log(arrayContiene(["Pedro", "Juan", "Maria"], "Juan")); // ***true***

-----------------------
-------------------------

<h2 align="center">ANÁLISIS DE CÓDIGO FUENTE #5</h2>

<p align="center"><img src="/analisis_de_codigos/code-images/analisis-5/codigo_fuente_5.svg" width="600"/></p>

--------------------------
<strong>Este código se encarga de recibir un array de números y retornar la suma de todos los números que contiene. Esto lo hace de la siguiente manera:</strong>

Empieza declarando una función que toma cómo parámetro un array de números.

Con la siguiente línea se verifica que el parámetro ingresado a la función sea un array y en caso de no serlo devuelve un mensaje de error.

La siguiente verificación es que el array sea solo de números. Para verificar esto se usa el metodo ***some()*** donde dice que si alguno de los items del array es diferente de ***tipo number*** entonces devuelve un mensaje de error.

Si el array pasa las verificaciones anteriores, se usa el metodo ***reduce()*** para sumar todos los elementos del array. Este método toma una función de retorno de llamada que recibe dos argumentos: 'acc' y 'curr'. Esta función suma el valor actual al acumulador y devuelve el resultado y además se establece el valor inicial del acumulador que es ***0***.

------------------------

<h3> ALGUNOS EJEMPLOS </h3>

<h4>Los "//" representa el resultado que se va a mostrar en la consola</h4>

console.log(numeroMasGrande([1,2,3,4,5])); // ***15***

console.log(numeroMasGrande([])); // ***0***

console.log(numeroMasGrande([1,2,3,4,"5"])) // ***mensaje de error***

console.log(numeroMasGrande(6)) // ***mensaje de error***

console.log(numeroMasGrande({})) // ***mensaje de error***

console.log(numeroMasGrande(false)) // ***mensaje de error***

--------------------------
----------------------------

<h1 align="center">ANÁLISIS DE CÓDIGO FUENTE #6</h1>

<p align="center"><img src="/analisis_de_codigos/code-images/analisis-6/codigo_fuente_6.svg" width="600"/></p>

-------------------

Se inicia declarando una función llamada ***"empiezaConNueve"*** que toma cómo parámetro un número.

La primera línea dentro de la función es una validación que se encarga de verificar que el número ingresado sea un número y no otro tipo de dato comparando el tipo del dato ingresado con ***typeof*** y ***"number"*** siendo el tipo de dato que se desea.

A continuación se crean 2 constantes. La primera llamada ***"numeroAString"*** que pasa el número ingresado a un string y la segunda constante llamada ***"primerDigito"*** que guarda el primer digito del string guardado en la primera constante pero pasandolo otra vez a tipo de dato ***"number"***.

La función finaliza retornando una comparación (Es decir que va a retornar verdadero o falso) ***"primerDigito === 9"*** en caso de que el primer digito del número sea 9, la función va a retornar verdadero y en caso contrario retornará falso.

------------------------------

<h3>ALGUNOS EJEMPLOS</h3>

<h4>Los "//" representa el resultado que se va a mostrar en la consola</h4>

console.log(empiezaConNueve(965)) // ***true***

console.log(empiezaConNueve(65)) // ***false***

console.log(empiezaConNueve(999)) // ***true***

console.log(empiezaConNueve(0)) // ***false***

console.log(empiezaConNueve(9)) // ***true***

console.log(empiezaConNueve(true)) // ***mensaje de error***

-------------------------------------------------
---------------------------------------------



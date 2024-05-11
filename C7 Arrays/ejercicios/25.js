function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
    // Inicializar un contador para contar los números pares
    var contadorPares = 0;
  
    // Iterar sobre el arreglo de números
    for (var i = 0; i < numeros.length; i++) {
      // Verificar si el número es impar
      if (numeros[i] % 2 !== 0) {
        // Si es impar, continuar con la siguiente iteración
        continue;
      }
      // Si es par, incrementar el contador de números pares
      contadorPares++;
    }
  
    // Devolver la cantidad de números pares
    return contadorPares;
}
module.exports = contarParesConContinue;

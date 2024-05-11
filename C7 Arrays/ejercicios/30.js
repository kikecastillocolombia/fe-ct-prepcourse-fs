function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

    // Crear un objeto como un conjunto para registrar los números vistos
    var numerosVistos = {};
    
    // Iterar sobre el arreglo de números
    for (var i = 0; i < numeros.length; i++) {
      // Verificar si el número actual ya ha sido visto
      if (numerosVistos[numeros[i]]) {
        // Si el número actual ya ha sido visto, devolverlo (es el primer elemento repetido)
        return numeros[i];
      }
      // Registrar el número actual como visto
      numerosVistos[numeros[i]] = true;
    }
    
    // Si no se encuentra ningún elemento repetido, devolver undefined
    return undefined;  
  }
  
  module.exports = encontrarElementoRepetido;
  
function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:


    // Verificar si el arreglo es vacío
    if (numeros.length === 0) {
      return null; // Si el arreglo es vacío, devolver null
    }
    
    // Encontrar el número mínimo y máximo en el arreglo
    var min = Math.min(...numeros);
    var max = Math.max(...numeros);
    
    // Calcular la suma total esperada de la secuencia de números consecutivos
    var sumaTotalEsperada = ((max - min + 1) * (min + max)) / 2;
    
    // Calcular la suma actual de los números en el arreglo
    var sumaActual = numeros.reduce(function(acumulador, numero) {
      return acumulador + numero;
    }, 0);
    
    // Calcular el número faltante restando la suma total esperada de la suma actual
    var numeroFaltante = sumaTotalEsperada - sumaActual;
    
    // Verificar si no hay número faltante
    if (numeroFaltante === 0) {
      return null; // Si no hay número faltante, devolver null
    }
    
    // Devolver el número faltante
    return numeroFaltante;
  }
  
  module.exports = encontrarNumeroFaltante;
  
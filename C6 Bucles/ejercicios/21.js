function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
   // Si el número es 0, no es una potencia de 2
   if (numero === 0) {
    return false;
  }
  
  // Mientras el número sea divisible por 2 y no sea 1
  while (numero % 2 === 0 && numero !== 1) {
    // Dividir el número por 2
    numero /= 2;
  }
  
  // Si el resultado de las divisiones es 1, es una potencia de 2
  return numero === 1;
}
module.exports = esPotenciaDeDos;

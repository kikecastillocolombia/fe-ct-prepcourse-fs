function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  // Iterar sobre la secuencia de números
  for (var i = 0; i < secuencia.length; i++) {
    // Verificar si el número actual es un múltiplo de n
    if (secuencia[i] % n === 0) {
      // Si es un múltiplo de n, devolver el número
      return secuencia[i];
    }
    // Si no es un múltiplo de n, continuar con la siguiente iteración
    continue;
  }
  // Si no se encuentra ningún múltiplo de n, devolver null o cualquier otro valor que prefieras
  return undefined;
}

module.exports = encontrarPrimerMultiploDeN;
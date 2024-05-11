function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero <= 1) {
    return false; // 0 y 1 no son números primos
  }
  
  // Iteramos desde 2 hasta la mitad de "numero"
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return false; // Si es divisible por algún número en el rango, no es primo
    }
  }
  
  return true; // Si no es divisible por ningún número en el rango, es primo
}

module.exports = esNumeroPrimo;

function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0; // Inicializamos un contador para llevar la cuenta de las repeticiones
  
  // Bucle do-while para aumentar el valor de "num" en 5 hasta un máximo de 8 repeticiones
  do {
    num += 5; // Aumentamos el valor de "num" en 5
    contador++; // Incrementamos el contador de repeticiones
  } while (contador < 8); // Continuamos el bucle mientras el contador sea menor que 8
  
  return num; // Devolvemos el valor final de "num"
}

module.exports = doWhile;
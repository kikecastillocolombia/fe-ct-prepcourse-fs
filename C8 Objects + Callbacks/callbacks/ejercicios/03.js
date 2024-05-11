function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:
    // Verificar si se recibe una función callback
    if (typeof cb === 'function') {
      // Invocar el callback pasándole los dos números como argumentos y retornar el resultado
      return cb(num1, num2);
    } else {
      // Si no se recibe una función callback, devolver null
      return null;
    }
  }

module.exports = operacionMatematica;

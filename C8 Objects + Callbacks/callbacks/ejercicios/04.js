function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

      // Sumar todos los números del arreglo
      const suma = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);
      // Invocar el callback pasándole la suma como argumento
      cb(suma);
    }
module.exports = sumarArray;

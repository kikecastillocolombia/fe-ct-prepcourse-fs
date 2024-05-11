function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
      // Verificar si se recibe una función callback
      if (typeof callback === 'function') {
        // Aplicar la función de callback al string y devolver el resultado
        return callback(string);
      } else {
        // Si no se recibe una función callback, retornar el string original
        return string;
      }
    }

module.exports = cambiarCadena;

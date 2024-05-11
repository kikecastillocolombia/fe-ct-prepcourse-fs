function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
    // Inicializar un arreglo para almacenar los resultados de la tabla de multiplicar del 6
    var tabla = [];
  
    // Iterar desde 0 hasta 10
    for (var i = 0; i <= 10; i++) {
      // Calcular el resultado de la multiplicación y agregarlo al arreglo
      tabla.push(i * 6);
    }
    
    // Devolver el arreglo con los resultados de la tabla de multiplicar del 6
    return tabla;
}

module.exports = tablaDelSeis;

function breakStatement(num) {
  // Inicializar un arreglo para almacenar los resultados
  var resultados = [];

  // Iterar hasta 10 veces
  for (var i = 0; i < 10; i++) {
    // Aumentar el número en 2 en cada iteración
    num += 2;
    // Guardar el nuevo valor en el arreglo
    resultados.push(num);
    // Verificar si la suma del valor y la cantidad de iteraciones coincide
    if (num === i) {
      // Si coincide, interrumpir la ejecución y devolver el string
      return "Se interrumpió la ejecución";
    }
  }

  // Devolver el arreglo con los resultados
  return resultados;
}

module.exports = breakStatement;

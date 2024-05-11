function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  // Verificar si el arreglo está vacío
  if (resultadosTest.length === 0) {
    return 0; // Si el arreglo está vacío, devolver 0 para evitar divisiones por 0
  }
  
  // Calcular la suma de todos los elementos del arreglo
  var suma = resultadosTest.reduce(function(acumulador, nota) {
    return acumulador + nota;
  }, 0);
  
  // Calcular el promedio dividiendo la suma por la cantidad de elementos
  var promedio = suma / resultadosTest.length;
  
  // Devolver el promedio
  return promedio;
}

module.exports = promedioResultadosTest;

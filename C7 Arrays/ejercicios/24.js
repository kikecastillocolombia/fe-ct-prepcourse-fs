function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
    // Inicializar un arreglo para almacenar los nuevos valores
    var nuevosValores = [];
  
    // Iterar hasta 10 veces
    for (var i = 1; i <= 10; i++) {
      // Si el número de iteraciones es igual a 5, continuar con la siguiente iteración
      if (i === 5) {
        continue;
      }
      // Aumentar el número en 2 en cada iteración, excepto cuando i es igual a 5
      num += 2;
      // Guardar el nuevo valor en el arreglo
      nuevosValores.push(num);
    }
  
    // Devolver los nuevos valores
    return nuevosValores; 
}

module.exports = continueStatement;

function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  // Inicializar un arreglo para almacenar los meses encontrados
  var mesesEncontrados = [];
  
  // Iterar sobre el arreglo
  for (var i = 0; i < array.length; i++) {
    // Verificar si el elemento actual es "Enero", "Marzo" o "Noviembre"
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      // Agregar el mes encontrado al arreglo de meses encontrados
      mesesEncontrados.push(array[i]);
    }
  }
  
  // Verificar si se encontraron los tres meses
  if (mesesEncontrados.length === 3) {
    // Si se encontraron los tres meses, devolver el arreglo de meses encontrados
    return mesesEncontrados;
  } else {
    // Si no se encontraron los tres meses, devolver el mensaje de error
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;

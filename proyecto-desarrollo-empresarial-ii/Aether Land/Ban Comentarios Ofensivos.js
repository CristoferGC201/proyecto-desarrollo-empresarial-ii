// Lista de palabras ofensivas
const palabrasOfensivas = [
    "Puta", "puta","puto", "Puto",
    "Cabrón","Cabrona","cabron","cabrona",
    "Hijo de puta", "hdp",
    "Mierda", "mierda",
    "Joder", "joder",
    "coño",
    "pendejo", "Pendejo", "Pendeja", "pendeja",
    "polla",
    "Pelotudo", "pelotudo",
    "Culero", "culero" ,"culera"
    // añade más palabras según sea necesario
  ];
  
  // Función para verificar si un texto contiene palabras ofensivas
  function contienePalabrasOfensivas(texto) {
    // Convertimos el texto a minúsculas para hacer la comparación insensible a mayúsculas
    const textoMinusculas = texto.toLowerCase();
    
    // Recorremos la lista de palabras ofensivas
    for (let palabra of palabrasOfensivas) {
      // Si el texto contiene la palabra ofensiva, devolvemos true
      if (textoMinusculas.includes(palabra.toLowerCase())) {
        return true;
      }
    }
    
    // Si no se encontró ninguna palabra ofensiva, devolvemos false
    return false;
  }
  
  // Función para censurar las palabras ofensivas en un texto
  function censurarPalabrasOfensivas(texto) {
    let textoCensurado = texto;
    
    // Recorremos la lista de palabras ofensivas
    for (let palabra of palabrasOfensivas) {
      // Creamos una expresión regular para buscar la palabra ofensiva, insensible a mayúsculas
      const regex = new RegExp(palabra, 'gi');
      // Reemplazamos la palabra ofensiva por asteriscos
      textoCensurado = textoCensurado.replace(regex, '*'.repeat(palabra.length));
    }
    
    return textoCensurado;
  }
  
  // Ejemplo de uso
  const textoEjemplo = "Este es un ejemplo con palabra1 y otra palabra2.";
  if (contienePalabrasOfensivas(textoEjemplo)) {
    console.log("El texto contiene palabras ofensivas.");
    const textoCensurado = censurarPalabrasOfensivas(textoEjemplo);
    console.log("Texto censurado:", textoCensurado);
  } else {
    console.log("El texto no contiene palabras ofensivas.");
  }
  
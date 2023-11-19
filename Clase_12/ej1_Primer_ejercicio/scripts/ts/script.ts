let rectangulo1: Rectangulo; // Declaración de una variable que contendrá un objeto Rectangulo
let dom_contenedor: HTMLElement; // Declaración de una variable que contendrá un elemento del DOM
let cadena: string; // Declaración de una variable de tipo string

rectangulo1 = new Rectangulo(4, 3); // Creación de una nueva instancia de Rectangulo con base 4 y altura 3
dom_contenedor = document.getElementById("contenedor")!; // Obtiene el elemento del DOM con el id "contenedor"

// Muestra el detalle del rectángulo en el elemento del DOM
// dom_contenedor.innerHTML = rectangulo1.detalle();

// Muestra el área del rectángulo en el elemento del DOM convirtiéndolo a string
// dom_contenedor.innerHTML = rectangulo1.calcularArea().toString();

// Muestra un mensaje personalizado con la base, altura y área del rectángulo en el elemento del DOM
dom_contenedor.innerHTML = `El área del rectángulo de base ${rectangulo1.base} 
                            y de altura ${rectangulo1.altura} es ${rectangulo1.calcularArea()}`

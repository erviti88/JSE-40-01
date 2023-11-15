// Declaración de variables
let miCafetera = null; // Variable para almacenar la cafetera
let opcion; // Variable para almacenar la opción del usuario
let menu = " MENÚ CAFETERA \n" // Menú mostrado al usuario
        + "----------------------\n"
        + "1. Encender Cafetera\n"
        + "2. Servir vaso\n"
        + "3. Servir taza\n"
        + "4. Rellenar\n"
        + "5. Mostrar cantidad de agua\n"
        + "6. Apagar la cafetera\n";

let mensaje; // Variable para almacenar mensajes de operaciones

do {
    opcion = prompt(menu); // Se muestra el menú y se obtiene la opción del usuario

    if (opcion >= 2 && opcion <=5 && miCafetera == null) {
        // Si la opción es de servir y no hay cafetera encendida, se muestra un mensaje de error
        alert("Encienda primero la cafetera.");
    } else {
        // En caso contrario, se ejecuta la opción seleccionada por el usuario
        switch (opcion) {
            case "1":
                // Opción para encender la cafetera
                miCafetera = new Cafetera(); // Se crea una nueva instancia de la clase Cafetera
    
                // Se establecen las capacidades de la cafetera, vaso y taza
                miCafetera.setCapacidadCafeteraMaxima(prompt("Introduzca la capacidad de la cafetera"));
                miCafetera.setCapacidadVaso(prompt("Introduzca la capacidad del vaso"));
                miCafetera.setCapacidadTaza(prompt("Introduzca la capacidad de la taza"));
    
                alert("Cafetera encendida 😁"); // Se muestra un mensaje indicando que la cafetera está encendida

                break;
    
            case "2":
                // Opción para servir café en un vaso
                try {
                    mensaje = miCafetera.servirVaso(); // Se intenta servir café en el vaso
                    alert(mensaje); // Se muestra un mensaje indicando si se pudo servir o no
                } catch (error) {
                    alert(error); // En caso de error, se muestra el mensaje de error correspondiente
                }
            
                break;
                
            case "3":
                // Opción para servir café en una taza
                try {
                    alert(miCafetera.servirTaza()); // Se intenta servir café en la taza y se muestra un mensaje
                } catch (error) {
                    alert(error); // En caso de error, se muestra el mensaje de error correspondiente
                }
                
                break;
    
            case "4": 
                // Opción para rellenar la cafetera
                mensaje = miCafetera.rellenarCafetera(); // Se rellena la cafetera y se obtiene un mensaje
                alert(mensaje); // Se muestra un mensaje indicando que la cafetera ha sido rellenada

                break;
                
            case "5":
                // Opción para mostrar la cantidad de agua restante en la cafetera
                alert(miCafetera.capacidadRestante); // Se muestra la cantidad de agua restante en la cafetera
                break;
    
            case "6":
                // Opción para apagar la cafetera y terminar el programa 
                alert("Disfrute de su café."); // Mensaje de despedida
                break;
        
            default:
                // Opción incorrecta seleccionada por el usuario
                alert("Opción incorrecta.");
                break;
        }
    }

} while (opcion !== "6"); // El bucle continúa mientras el usuario no seleccione la opción de apagar la cafetera
class Alumno {
    // Constructor de la clase que se ejecuta cuando se crea una nueva instancia de Alumno.
    constructor(p_matricula, p_nombre, p_apellido, p_telefono) {
        // Estos son los atributos de la clase Alumno. 
        // Si no se pasan valores para los atributos al crear una nueva instancia, se les asigna un valor por defecto.
        this.matricula = p_matricula || 0;
        this.nombre = p_nombre || "Sin nombre";
        this.apellido = p_apellido || "Sin apellido";
        this.telefono = p_telefono || "Sin teléfono";
        
        // Estos son otros dos atributos de la clase con valores por defecto.
        this.nota = "Sin calificar";
        this.email = "Sin email";
    }

    // Este es un método de la clase que devuelve los detalles del alumno en formato HTML.
    detalle() {
        let mensaje;

        mensaje = "MATRÍCULA: " + this.matricula + "<br>"  
                + "NOMBRE: " + this.nombre + "<br>"
                + "APELLIDO: " + this.apellido + "<br>" 
                + "TELÉFONO: " + this.telefono + "<br>"
                + "NOTA: " + this.nota + "<br><br>";
        return mensaje;
    }

    // Este es otro método que permite calificar al alumno. 
    // Recibe una nota y actualiza el atributo 'nota' del alumno con ese valor.
    calificar(p_nota) {
        this.nota = p_nota;
    }
}
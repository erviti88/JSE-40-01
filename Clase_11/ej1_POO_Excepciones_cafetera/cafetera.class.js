class Cafetera {
    constructor(p_capacidadCafeteraMaxima, p_capacidadVaso, p_capacidadTaza) {
        // Inicialización de las capacidades de la cafetera, vaso y taza
        this.capacidadCafeteraMaxima = p_capacidadCafeteraMaxima;
        this.capacidadRestante = p_capacidadCafeteraMaxima // Inicialmente, la capacidad restante es igual a la capacidad máxima
        this.capacidadVaso = p_capacidadVaso;
        this.capacidadTaza = p_capacidadTaza;
    }

    // Getters y setters
    // -----------------

    // Getter para la capacidad máxima de la cafetera...
    getCapacidadCafeteraMaxima() {
        return this.capacidadCafeteraMaxima;
    }

    // Setter para la capacidad máxima de la cafetera...
    setCapacidadCafeteraMaxima(p_capacidadCafeteraMaxima) {
        // Validación de la capacidad máxima de la cafetera
        if (isNaN(p_capacidadCafeteraMaxima) || p_capacidadCafeteraMaxima < 0) {
            throw "Formato incorrecto o valor negativo. Debe indicar un valor numérico positivo.";
        }

        /* if (isNaN(p_capacidadCafeteraMaxima)) {
            "Formato incorrecto. Debe indicar un valor númerico.";
        } else if (p_capacidadCafeteraMaxima < 0) {
            "Formato incorrecto. Debe indicar un valor positivo.";
        } */

        // Actualización de la capacidad máxima y restante de la cafetera
        this.capacidadCafeteraMaxima = p_capacidadCafeteraMaxima;
        this.capacidadRestante = p_capacidadCafeteraMaxima;
    }

    // Getter para la capacidad del vaso...
    getCapacidadVaso() {
        return this.capacidadVaso;
    }

    // Setter para la capacidad del vaso...
    setCapacidadVaso(p_capacidadVaso) {
        // Validación de la capacidad del vaso
        if (isNaN(p_capacidadVaso) || p_capacidadVaso < 0) {
            throw "Formato incorrecto o valor negativo. Debe indicar un valor numérico positivo.";
        }

        /* if (isNaN(p_capacidadVaso)) {
            "Formato incorrecto. Debe indicar un valor númerico.";
        } else if (p_capacidadVaso < 0) {
            "Formato incorrecto. Debe indicar un valor positivo.";
        } */

        // Actualización de la capacidad del vaso
        this.capacidadVaso = p_capacidadVaso;
    }

    // Getter para la capacidad de la taza...
    getCapacidadTaza() {
        return this.capacidadTaza;
    }

    // Setter para la capacidad de la taza...
    setCapacidadTaza(p_capacidadTaza) {
         // Validación de la capacidad de la taza
         if (isNaN(p_capacidadTaza) || p_capacidadTaza < 0) {
            throw "Formato incorrecto o valor negativo. Debe indicar un valor numérico positivo.";
        }

        /* if (isNaN(p_capacidadTaza)) {
            "Formato incorrecto. Debe indicar un valor númerico.";
        } else if (p_capacidadTaza < 0) {
            "Formato incorrecto. Debe indicar un valor positivo.";
        } */

        // Actualización de la capacidad de la taza
        this.capacidadTaza = p_capacidadTaza;
    }

    // Método para servir café en un vaso
    servirVaso() {
        let mensaje;

        if (this.capacidadRestante < this.capacidadVaso) {
            /* mensaje = "El vaso de café no se ha servido, no queda agua suficiente en la cafetera.";
            throw mensaje; */

            // No hay suficiente agua en la cafetera para llenar el vaso
            throw "El vaso de café no se ha servido, no queda agua suficiente en la cafetera.";
        }
            
        mensaje = "Vaso servido.";
        this.capacidadRestante -= this.capacidadVaso; // Se reduce la cantidad de agua en la cafetera

        return mensaje;
    }

    // Método para servir café en una taza
    servirTaza() {
        let mensaje;

        if (this.capacidadRestante < this.capacidadTaza) {
            // No hay suficiente agua en la cafetera para llenar la taza
            mensaje = "La taza de café no se ha servido, no queda agua suficiente en la cafetera.";
            throw mensaje;
        }
            
        mensaje = `Taza servida`;
        // this.capacidadRestante = this.capacidadRestante - this.capacidadTaza;
        this.capacidadRestante -= this.capacidadTaza; // Se reduce la cantidad de agua en la cafetera al servir la taza

        return mensaje;
    }

    // Método para rellenar la cafetera
    rellenarCafetera() {
        // Se restaura la capacidad restante a la capacidad máxima de la cafetera
        this.capacidadRestante = this.capacidadCafeteraMaxima;
        return "Cafetera rellenada.";
    }
}
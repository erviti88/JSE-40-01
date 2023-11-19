"use strict";
class Rectangulo {
    // Constructor
    // ===========
    constructor(p_base, p_altura) {
        // Inicializa las propiedades base y altura con los valores proporcionados,
        // si alguno de los valores es falsy (como undefined, null, 0), asigna NaN
        this.base = p_base || NaN;
        this.altura = p_altura || NaN;
    }
    // Métodos
    // =======
    // Método que devuelve una cadena con los detalles del rectángulo
    detalle() {
        let texto;
        texto = `BASE: ${this.base} <br> ALTURA: ${this.altura}`;
        return texto;
    }
    // Método que calcula y devuelve el área del rectángulo
    calcularArea() {
        let resultado;
        resultado = this.base * this.altura;
        return resultado;
    }
}

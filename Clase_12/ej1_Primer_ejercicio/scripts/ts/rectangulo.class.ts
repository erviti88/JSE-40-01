class Rectangulo {
    // Constructor
    // ===========
    constructor (p_base: number, p_altura: number) {
        // Inicializa las propiedades base y altura con los valores proporcionados,
        // si alguno de los valores es falsy (como undefined, null, 0), asigna NaN
        this.base = p_base || NaN;
        this.altura = p_altura || NaN;
    }

    // Propiedades
    // ===========
    public base!: number;
    public altura!: number;

    // Métodos
    // =======
    
    // Método que devuelve una cadena con los detalles del rectángulo
    public detalle(): string {
        let texto: string;
        texto = `BASE: ${this.base} <br> ALTURA: ${this.altura}`

        return texto
    }

    // Método que calcula y devuelve el área del rectángulo
    public calcularArea(): number {
        let resultado: number;
        resultado = this.base * this.altura;

        return resultado; 
    }
}
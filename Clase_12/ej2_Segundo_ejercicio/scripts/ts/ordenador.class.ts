class Ordenador {

    constructor() {}
    
    // public memoria!: number;

    private _memoria! : number; // Propiedad privada para almacenar la memoria del ordenador

    // Método "get" para obtener el valor de la memoria
    public get memoria() : number {
        return this._memoria;
    }

    // Método "set" para asignar un valor a la memoria
    public set memoria(v : number) {
        this._memoria = v;
    }
    
}
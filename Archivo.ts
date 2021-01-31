import fs from 'fs';

export default class Archivo {
    Ruta: string;
    constructor(ruta: string) {
        this.Ruta = ruta;
    }
    Leer(){
        try {
            const resultado = fs.readFileSync(this.Ruta, 'utf-8');
            return resultado ? resultado : '[]'; 
        } catch (error) {
            console.log(error)
        }
    }
}

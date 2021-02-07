import fs from 'fs';

interface Producto{
    id: number
    title: string,
    price: number,
    thumbnail: string
};

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
            console.log('el archivo no existe, verifique!', error)
        }
    }
    Guardar(arreglo: any, producto: Producto){
        try {
            let aParse = JSON.parse(arreglo);
            producto.id = aParse.length + 1
            aParse = [...aParse, producto]
            fs.writeFileSync(this.Ruta, JSON.stringify(aParse));
        } catch (error) {
            console.log('Archivo no encontrado, verifique!', error)
        } 
    }
    async Borrar(){
        try {
            await fs.promises.unlink(this.Ruta);
            console.log('se elimino de forma exitosa')
        } catch (error) {
            console.log('Archivo no encontrado, verifique!', error)
        } 
    }
    Crear(arreglo: Producto){
        try {
            fs.writeFileSync(this.Ruta, JSON.stringify([arreglo]));
        } catch (error) {
            console.log('el archivo no se pudo crear', error)
        } 
    }
}

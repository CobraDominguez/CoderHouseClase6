import fs from 'fs';

interface Producto{
    id: number
    price: number,
    thumbnail: string
};

export default class Archivo {
    Ruta: string;
    constructor(ruta: string) {
        this.Ruta = ruta;
    }
    async Leer(){
        try {
            // const resultado = fs.readFileSync(this.Ruta, 'utf-8');
            const resultado = await fs.readFile(this.Ruta, 'utf-8', (err, data) => {
                console.log(data);
                console.log("transformo en JSON");  
                let T = JSON.parse(data); 
                console.log(T);
                console.log("fin de json");                                
              });
              console.log("resultado");
              console.log(typeof(resultado));
              console.log(resultado);
            // let aParse = JSON.parse(resultado);
            // console.log(aParse);
            // return resultado ? resultado : '[]'; 
            return "Hola";
        } catch (error) {
            console.log(error)
        }
    }
    Guardar(arreglo: any[], producto: Producto){
        try {
            console.log("llegue hasta aqui");
            console.log(arreglo);
            // let aParse = JSON.parse(arreglo);
            // console.log(aParse);
            console.log(typeof(arreglo));
            producto.id = arreglo.length + 1
            console.log(producto.id);
            // arreglo = [...arreglo, producto]
            // console.log("ya modifique el array");
            // console.log(arreglo);
            // console.log(this.Ruta);
            // console.log(JSON.stringify(arreglo));
            // fs.writeFileSync(this.Ruta, JSON.stringify(arreglo));
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
}

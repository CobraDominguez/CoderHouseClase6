import Archivo from './Archivo';

const file = new Archivo('./Productos.txt');
console.log(file.Leer());

const producto2 = {
    id: 0,
    price: 200,
    thumbnail: 'imagen3.jpg'
}
// file.Guardar(file.Leer(), producto2);

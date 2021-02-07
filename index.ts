import Archivo from './Archivo';

const file = new Archivo('./Productos.txt');

console.log(file.Leer());

const producto2 = {
    id: 0,
    title: "titulo 4",
    price: 200,
    thumbnail: 'imagen4.jpg'
}
file.Guardar(file.Leer(), producto2);
console.log(file.Leer());
file.Borrar();

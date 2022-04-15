import {productos} from './productos.js'

export const PromiseProductos = (categoryId) => {
  return new Promise((resolve, reject) => {
    let condition = true;
    const productosFiltrados = productos.filter(
      (producto) => producto.categorias === categoryId
    );
    if (condition) {
      setTimeout(() => {
        categoryId ? resolve(productosFiltrados) : resolve(productos);
      }, 2000);
    } else {
      reject(console.log("Error"));
    }
  });
};

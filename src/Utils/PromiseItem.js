import {productos} from './productos.js'

export const PromiseProductos = new Promise ( (resolve, reject)=>{
    let condition= true;
    if(condition){
       setTimeout (()=>{
           resolve(productos);}, 2000);
    }
    else{
        reject(console.log("Error"));
    }
});

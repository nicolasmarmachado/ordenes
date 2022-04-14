import { productos } from "./productos.js";

export const getItem = () => {
    return new Promise ( (resolve, reject)=>{
        setTimeout (()=>{
            resolve(productos);}, 2000);
     });
} 

       
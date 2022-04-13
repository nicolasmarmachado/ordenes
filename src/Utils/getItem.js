import { producto1 } from "./productos.js";

export const getItem = () => {
    return new Promise ( (resolve, reject)=>{
        setTimeout (()=>{
            resolve(producto1);}, 2000);
     });
} 

       
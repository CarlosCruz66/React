// import { heroes} from './data/heroes';
// import {heroes} from './data/heroes';


import { heroes } from "./data/heroes";

// const getHeroeByI = (id)=>{
//     return heroes.find((heroe)=>{
//         if(heroe,id===id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

const getHeroeById = (id)=> heroes.find((heroe)=>heroe.id===id);



console.log(getHeroeById(2));

const getHeroesByOwner=(owner)=>heroes.find((heroe)=>heroe.id===id);

console.log(getHeroesByOwner('DC'));

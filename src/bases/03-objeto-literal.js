

const persona={
 nombre: 'Tony',
 apellido: 'Stark',
 edad: 45,
 direccion:{
    ciudad: 'New York',
    zip: 54634433,
    lat: 14.8849495,
    lng:34.92543
 }
};

// console.table( {persona} );

const persona2={ ...persona };
persona2.nombre='Peter';

console.log( {persona} );
console.log(persona2)
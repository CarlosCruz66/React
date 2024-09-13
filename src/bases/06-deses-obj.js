//Desestructuración
//Asignación Desestructurante
const persona={
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
    
};

// const {edad,nombre,clave}=persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usaContext=({clave,nombre,edad,rango='Capitan'})=>{
    
    // console.log(nombre,edad,rango)
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:14.5675,
            lng: -12.46544
        }
    }
}

const { nombreClave,anios,latlng:{lat,lng} } = usaContext(persona);
console.log(nombreClave, anios);
console.log(lat,lng);

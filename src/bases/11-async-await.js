

// const getImagenPromesa=()=>new Promise(resolve=>resolve(''))
// getImagenPromesa().then(console.log);
try {
    const getImagen=async()=>{
        const apiKey='UpYA7ifZTJp3kxmK1ChipbRNygesmZvC';
        const resp= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}=await resp.json();
        
        const {url}=data.images.original;
        
        const img = document.createElement('img');
        img.src=url;
        
        document.body.append(img);
    
        
    
    }
    
    getImagen();
} catch (error) {
    //manejo del error
    console.error(error);
}



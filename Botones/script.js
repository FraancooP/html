document.addEventListener("DOMContentLoaded",()=>{
    const opcion1 = document.getElementById("change-color");
    const body = document.body;
    opcion1.addEventListener("click",() => {
        const colorRandom = generarColor();
        body.style.backgroundColor = colorRandom;
    });








    function generarColoFondo(){
        const letras = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0 ; i < 6 ; i++){
            color += letras[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
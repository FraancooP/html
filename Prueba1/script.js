document.addEventListener("DOMContentLoaded",()=>{
    const opcion1 = document.getElementById("cambiarFondo");
    const opcion2 = document.getElementById("cambiarLetras");
    const opcion3 = document.getElementById("generar");
    const body = document.body;
    opcion1.addEventListener("click",() => {
        const colorRandom = generarColor();
        body.style.backgroundColor = colorRandom;
    });
    opcion2.addEventListener("click",() => {
        const colorRandom = generarColor();
        body.style.color = colorRandom;
    });
    opcion3.addEventListener("click", generarImagen);

    function generarColor(){
        const letras = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0 ; i < 6 ; i++){
            color += letras[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function generarImagen(){
        const img = document.createElement('img');
        img.src = 'C:\\Users\\franc\\Desktop\\Html\\Prueba1\\images\\luna.png';
        img.style.display = 'block'; // Asegura que la imagen se muestre como bloque
        img.style.marginTop = '20px'; // Añade un margen superior para separarla de los otros elementos
        img.style.position = 'absolute'; // Establece la posición absoluta
        img.style.bottom = '20px'; // Alinea la imagen en la parte inferior de la página
        img.style.left = '50%'; // Centra horizontalmente la imagen
        img.style.transform = 'translateX(-50%)'; // Ajusta la posición horizontalmente centrada
        document.body.appendChild(img)
    }
});
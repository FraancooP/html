function mostrarRegistro() {
    ocultarTodos();
    document.getElementById("registro").style.display = "block";
}

function mostrarArticulos() {
    ocultarTodos();
    document.getElementById("articulos").style.display = "block";
}

function mostrarCupon() {
    ocultarTodos();
    document.getElementById("cupon").style.display = "block";
}

function ocultarTodos() {
    document.getElementById("registro").style.display = "none";
    document.getElementById("articulos").style.display = "none";
    document.getElementById("cupon").style.display = "none";
}

// Mostrar el contenido de "Registrarse" por defecto al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarRegistro();
});
// JavaScript para gestionar la navegación y mostrar el contenido de las opciones de Inicio

document.addEventListener("DOMContentLoaded", function() {
    // Ocultar todos los contenidos secundarios al cargar la página
    ocultarTodos();
    
    // Mostrar el contenido correspondiente al hacer clic en una opción del menú desplegable de Inicio
    const menuItems = document.querySelectorAll('.submenu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            ocultarTodos();
            document.getElementById(targetSectionId).style.display = 'block';
            // Guardar el estado en el historial del navegador para permitir la navegación con las flechas
            history.pushState({ sectionId: targetSectionId }, null, `#${targetSectionId}`);
        });
    });

    // Mostrar el contenido correspondiente al cargar la página o al navegar hacia adelante/atrás
    window.addEventListener('popstate', function(event) {
        const sectionId = event.state ? event.state.sectionId : 'inicio';
        ocultarTodos();
        document.getElementById(sectionId).style.display = 'block';
    });
});

function ocultarTodos() {
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.style.display = 'none';
    });
}

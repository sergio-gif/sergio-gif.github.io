document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Ocultar todas las secciones
            sections.forEach(section => section.classList.add('oculto'));

            // Mostrar la sección seleccionada
            document.getElementById(targetId).classList.remove('oculto');
        });
    });
});

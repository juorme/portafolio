// Obtener referencia al elemento de navegación //
const navLinks = document.querySelectorAll('nav a');


// Agregar evento de clic a cada enlace de navegación //
navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});


// Función para desplazarse suavemente a una sección
function scrollToSection(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

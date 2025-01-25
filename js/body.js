// Función para manejar la animación al hacer scroll
function handleScrollAnimations() {
    const subtitles = document.querySelectorAll('.subtitle');
    const paragraphs = document.querySelectorAll('.paragraph');
    // Función para activar animaciones
    const activateAnimations = (elements) => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight - 100) { // Activar animación 100px antes de que sea visible
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    };
    // Aplicar animaciones a títulos y párrafos
    activateAnimations(subtitles);
    activateAnimations(paragraphs);
}
// Detectar el evento scroll y llamar a la función
window.addEventListener('scroll', handleScrollAnimations);
// Ejecutar la función al cargar la página
handleScrollAnimations();
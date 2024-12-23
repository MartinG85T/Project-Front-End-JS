// Seleccionar elementos
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Agregar evento de clic al botón
toggleButton.addEventListener('click', () => {
    // Alternar la clase "dark-mode" en el body
    body.classList.toggle('dark-mode');

    // Cambiar el ícono dinámicamente
    const icon = toggleButton.querySelector('img');
    if (body.classList.contains('dark-mode')) {
        icon.src = 'Images/lunallena.svg'; // Cambia al ícono de luna llena
        icon.alt = 'Modo claro';
    } else {
        icon.src = 'Images/luna.svg'; // Cambia al ícono de luna
        icon.alt = 'Modo oscuro';
    }
});
